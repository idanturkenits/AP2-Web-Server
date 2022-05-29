using WebApi.Models;

namespace WebApi.Services
{
    public interface IService
    {
        Task<ICollection<User>> GetAllUsers();
        Task<User> GetUserById(string id);
        Task DeleteUserById(string id);
        Task AddNewUser(User user);
        bool UserExists(string username);
        Task<ICollection<Contact>> GetAllContacts(string username);
        Task<Contact> GetContact(string username, string contactUsername);

        Task DeleteContact(string username, string contactUsername);

        Task UpdateContact(string username, string contactUsername, string newName, string newServer);

        Task AddNewContact(string username, string id, string name, string server);

        bool ContactExists(string contactUsername);

        Task<ContactJson> ToJsonContact(Contact contact, string username);

        Task<Chat> GetChat(string username, string contactUsername);

        Task AddNewChat(string username, string contactUsername);

        Task<ICollection<MessageJson>> ToJsonChat(Chat chat);

        Task<Message> GetMessageById(int id);

        Task AddNewMessage(Chat chat, string content, bool sent);

        Task UpdateMessage(Message message, string content);

        Task DeleteMessage(Message message);

        MessageJson ToJsonMessage(Message message);

        string GetUsernameFromJWT(HttpContext httpContext);

        Task<Object> GetUserInfoById(string id);
    }
}
