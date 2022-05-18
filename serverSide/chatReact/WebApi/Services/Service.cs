using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Services
{
    public class Service : IService
    {
        private readonly WebApiContext _context;

        public Service(WebApiContext context)
        {
            this._context = context;
        }

        public string GetUsernameFromJWT(HttpContext httpContext)
        {
            var jwt = httpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", string.Empty);
            var handler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = handler.ReadJwtToken(jwt);
            var username = jwtSecurityToken.Claims.First(claim => claim.Type == "UserId").Value;

            return username;
        }

        public async Task AddNewUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUser(User user)
        {
            var delUser = await _context.User.FindAsync(user.Username);
            _context.User.Remove(delUser);
            await _context.SaveChangesAsync();
        }

        public bool UserExists(string username)
        {
            return _context.User.Any(e => e.Username == username);
        }

        public async Task<List<User>> GetAllUsers()
        {
            List<User> users = await _context.User.ToListAsync();
            return users;
        }

        public async Task<User> GetUserById(string id)
        {
            User user = await Task.Run(() => _context.User.Where(x => x.Username == id).FirstOrDefault());
            return user;
        }

        public async Task DeleteUserById(string id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null) return;
            await DeleteUser(user);
        }

        public async Task<List<Contact>> GetAllContacts(string username)
        {
            var contacts = from contact in _context.Contact
                           where contact.Chats != null
                           && contact.Chats.Find(chat => chat.user.Username == username) != null
                           select contact;

            return (await contacts.ToListAsync());
        }

        public bool ContactExists(string contactUsername)
        {
            return _context.Contact.Any(e => e.ContactUsername == contactUsername);
        }

        public async Task<Contact> GetContact(string username, string contactUsername)
        {
            var contact = await Task.Run(() => _context.Contact.Where(
                           contact => contact.ContactUsername == contactUsername
                           && contact.Chats.Any(chat => chat.user.Username == username)).FirstOrDefault());

            return contact;
        }

        public async Task<Contact> GetContactById(int id)
        {
            var c = await Task.Run(() => _context.Contact.Where(x => x.Id == id).FirstOrDefault());
            return (c);
        }

        public async Task AddNewContact(string username, string contactUsername, string name, string server)
        {

            var lastId = await _context.Contact.LastAsync();
            var contact = new Contact()
            {
                Id = lastId.Id,
                ContactUsername = contactUsername,
                Name = name,
                Server = server,
                Chats = new List<Chat>()
            };
            _context.Contact.Add(contact);
            await _context.SaveChangesAsync();
        }

        private async Task<Message> GetLastMessage(Contact contact, string username)
        {
            if (contact.Chats == null) return null;

            var chat = await Task.Run(() => contact.Chats.Where(
                                       ch => ch.user.Username == username
                                       ).FirstOrDefault());
            if (chat == null) return null;

            var message = await Task.Run(() => chat.Messagges.Last());
            return message;
        }

        public async Task DeleteContact(string username, string contactUsername)
        {
            var delChat = await GetChat(username, contactUsername);
            if (delChat == null) return;
            foreach(var msg in delChat.Messagges)
            {
                _context.Message.Remove(msg);
            }
            _context.Chat.Remove(delChat);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateContact(string username, string contactUsername, string newName, string newServer)
        {
            var contact = await GetContact(username, contactUsername);
            if (contact == null) return;
            contact.Name = newName;
            contact.Server = newServer;
        }

        public async Task<ContactJson> ToJsonContact(Contact contact, string username)
        {
            var lastMsg = await GetLastMessage(contact, username);
            if (lastMsg == null) return new ContactJson
            {
                id = contact.ContactUsername,
                name = contact.Name,
                server = contact.Server,
                last = null,
                lastdate = null
            };

            else return new ContactJson
            {
                id = contact.ContactUsername,
                name = contact.Name,
                server = contact.Server,
                last = lastMsg.Content,
                lastdate = lastMsg.Created
            };
        }

        public async Task<Chat> GetChat(string username, string contactUsername)
        {
            var contact = await GetContact(username, contactUsername);
            if (contact == null) return null;
            var chat = await Task.Run(() => contact.Chats.Where(
                                       ch => ch.user.Username == username
                                       ).FirstOrDefault());
            return chat;
        }

        public async Task AddNewChat(string username, string contactUsername)
        {
            var user = await GetUserById(username);
            var contact = await GetContact(username, contactUsername);
            if (user == null || contact == null) return;


            var lastId = await _context.Chat.LastAsync();
            var chat = new Chat
            {
                Id = lastId.Id+1,
                user = user,
                Messagges = new List<Message>()
            };

            contact.Chats.Add(chat);
            await _context.Chat.AddAsync(chat);
            await _context.SaveChangesAsync();
        }

        public async Task<List<MessageJson>> ToJsonChat(Chat chat)
        {
            var chatJson = new List<MessageJson>();
            foreach (var msg in chat.Messagges)
            {
                chatJson.Add(ToJsonMessage(msg));
            }

            return chatJson;
        }

        public async Task<Message> GetMessageById(int id)
        {
            return await _context.Message.FindAsync(id);
        }

        public async Task AddNewMessage(Chat chat, string content,  bool sent)
        {
            DateTime time = DateTime.Now;
            string format = "MMM ddd d HH:mm yyyy";

            var lastId = await _context.Message.LastAsync();
            var message = new Message
            {
                Id = lastId.Id + 1,
                Content = content,
                Created = time.ToString(format),
                Sent = sent
            };
            chat.Messagges.Add(message);
            await _context.Message.AddAsync(message);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateMessage(Message message, string content)
        {
            message.Content = content;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMessage(Message message)
        {
            _context.Message.Remove(message);
            await _context.SaveChangesAsync();
        }

        public MessageJson ToJsonMessage(Message message)
        {
            var msgJson = new MessageJson
            {
                id = message.Id,
                content = message.Content,
                created = message.Created,
                sent = message.Sent
            };

            return msgJson;
        }
    }
}
