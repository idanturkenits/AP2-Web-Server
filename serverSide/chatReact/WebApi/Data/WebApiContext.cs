#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    public class WebApiContext : DbContext
    {
        public WebApiContext (DbContextOptions<WebApiContext> options)
            : base(options)
        {
        }
        public DbSet<WebApi.Models.User> User { get; set; }
        public DbSet<WebApi.Models.Chat> Chat { get; set; }
        public DbSet<WebApi.Models.Contact> Contact { get; set; }
        public DbSet<WebApi.Models.Message> Message { get; set; }


    }
}
