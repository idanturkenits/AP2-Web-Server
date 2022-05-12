using WebApi.Models;

namespace WebApi.Services
{
    public interface IUsersService
    {
        Task<List<User>> GetAllUsers();
        Task<User> getUserById(string id);
        Task addNewUser(User user);
    }
}
