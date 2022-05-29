using Microsoft.EntityFrameworkCore;
using RatingPage.Data;
using RatingPage.Models;

namespace RatingPage.Services
{
    public class RatingService : IRatingService
    {
        private RatingPageContext _context;
        public RatingService(RatingPageContext context)
        {
            _context = context;
        }
        public async Task Add(Rating rating)
        {
            _context.Add(rating);
            await _context.SaveChangesAsync();
        }

        public async Task Edit(Rating rating)
        {
            _context.Update(rating);
            await _context.SaveChangesAsync();
        }

        public async Task<Rating> Get(int id)
        {
            var rating = await _context.Rating.FirstOrDefaultAsync(m => m.Id == id);
            return rating;
        }

        public async Task<List<Rating>> getAllRatings()
        {
            List<Rating> ratings = await _context.Rating.ToListAsync();
            return ratings;
        }

        public async Task Remove(int id)
        {
            var rating = await Get(id);
            _context.Rating.Remove(rating);
            await _context.SaveChangesAsync();
        }
    }
}
