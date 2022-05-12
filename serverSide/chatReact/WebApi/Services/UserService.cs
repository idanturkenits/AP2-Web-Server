using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Services
{
    public class UserService : IUsersService
    {
        private readonly WebApiContext context;

        public UserService(WebApiContext context)
        {
            this.context = context;
        }

        public async Task addNewUser(User user)
        {
            context.User.Add(user);
            await context.SaveChangesAsync();
        }

        public async Task deleteUser(User user)
        {
            var delUser = await context.User.FindAsync(user.Username);
            context.User.Remove(delUser);
            await context.SaveChangesAsync();
        }

        public bool UserExists(User user)
        {
            return context.User.Any(e => e.Username == user.Username);
        }

        public async Task<List<User>> GetAllUsers()
        {
            List<User> users = await context.User.ToListAsync();
            return users;
        }

        public async Task<User> getUserById(string id)
        {
            User user = await Task.Run(() => context.User.Where(x => x.Username == id).FirstOrDefault());
            return user;
        }
    }
}
