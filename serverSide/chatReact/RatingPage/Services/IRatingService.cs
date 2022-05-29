using RatingPage.Models;

namespace RatingPage.Services
{
    public interface IRatingService
    {
        Task<List<Rating>> getAllRatings();

        Task<Rating> Get(int id);

        Task Add(Rating rating);

        Task Remove(int id);

        Task Edit(Rating rating);

    }
}
