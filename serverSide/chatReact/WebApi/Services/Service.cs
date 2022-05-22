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

        public async Task<ICollection<User>> GetAllUsers()
        {
            ICollection<User> users = await _context.User.ToListAsync();
            return users;
        }

        public async Task<User> GetUserById(string id)
        {
            var user =await Task.Run(() => _context.User.Where(u => u.Username == id)
                                    .Include(c => c.Contacts)
                                    .FirstOrDefault());
            return user;
        }

        public async Task DeleteUserById(string id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null) return;
            await DeleteUser(user);
        }

        public async Task<ICollection<Contact>> GetAllContacts(string username)
        {
            var user = await GetUserById(username);
            var contacts = user.Contacts;
            if (contacts == null) return new List<Contact>();
            foreach (var con in contacts) 
            {
                _context.Entry(con).Collection(c => c.Chats).Load();
            }
            return (contacts.ToList());
        }

        public bool ContactExists(string contactUsername)
        {
            return _context.Contact.Any(e => e.ContactUsername == contactUsername);
        }

        public async Task<Contact> GetContact(string username, string contactUsername)
        {
            var user = await GetUserById(username);
            if (user == null || user.Contacts == null) return null;
            var contact = await Task.Run(() => user.Contacts.Where(contact => contact.ContactUsername == contactUsername).FirstOrDefault());
            _context.Entry(contact).Collection(c => c.Chats).Load();
            return contact;
        }

        public async Task<Contact> GetContactById(int id)
        {
            var c = await Task.Run(() => _context.Contact.Where(x => x.Id == id).Include(c => c.Chats).FirstOrDefault());
            return (c);
        }

        public async Task AddNewContact(string username, string contactUsername, string name, string server)
        {
            var contact = new Contact()
            {
                ContactUsername = contactUsername,
                Name = name,
                Server = server,
                Chats = new List<Chat>()
            };
            _context.Contact.Add(contact);

            var user = await GetUserById(username);
            if (user.Contacts == null)
                user.Contacts = new List<Contact>();
            
            user.Contacts.Add(contact);
            await _context.SaveChangesAsync();
        }

        private async Task<Message> GetLastMessage(Contact contact, string username)
        {
            if (contact.Chats == null) return null;

            var chat = await Task.Run(() => contact.Chats.Where(
                                       ch => ch.user.Username == username
                                       ).FirstOrDefault());
            if (chat == null) return null;
            _context.Entry(chat).Collection(msg => msg.Messagges).Load();
            if (!chat.Messagges.Any()) return null;

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
            _context.Contact.Remove(await GetContact(username, contactUsername));
            await _context.SaveChangesAsync();
        }

        public async Task UpdateContact(string username, string contactUsername, string newName, string newServer)
        {
            var contact = await GetContact(username, contactUsername);
            if (contact == null) return;
            contact.Name = newName;
            contact.Server = newServer;

            await _context.SaveChangesAsync();
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
                                       ch => ch.user.Username == username).FirstOrDefault());
            _context.Entry(chat).Collection(msg => msg.Messagges).Load();
            return chat;
        }

        public async Task AddNewChat(string username, string contactUsername)
        {
            var user = await GetUserById(username);
            var contact = await GetContact(username, contactUsername);
            if (user == null || contact == null) return;

            var chat = new Chat
            {
                user = user,
            };

            contact.Chats.Add(chat);
            await _context.Chat.AddAsync(chat);
            await _context.SaveChangesAsync();
        }

        public async Task<ICollection<MessageJson>> ToJsonChat(Chat chat)
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

            var message = new Message
            {
                Content = content,
                Created = time.ToString(format),
                Sent = sent
            };
            chat.Messagges.Add(message);
            _context.Message.Add(message);
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
