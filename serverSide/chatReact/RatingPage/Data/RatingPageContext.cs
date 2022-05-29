#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RatingPage.Models;

namespace RatingPage.Data
{
    public class RatingPageContext : DbContext
    {
        public RatingPageContext (DbContextOptions<RatingPageContext> options)
            : base(options)
        {
        }

        public DbSet<RatingPage.Models.Rating> Rating { get; set; }
    }
}
