#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using RatingPage.Data;
using RatingPage.Models;
using RatingPage.Services;

namespace RatingPage.Controllers
{
    public class RatingsController : Controller
    {
        private readonly IRatingService _service;

        public RatingsController(IRatingService service)
        {
            _service = service;
        }

        // GET: Ratings
        public async Task<IActionResult> Index()
        {
            List<Rating> lRating = await _service.getAllRatings();
            lRating.Sort((x, y) => y.SubmissionDate.CompareTo(x.SubmissionDate));
            return View(lRating);
        }

        // GET: Ratings/Details/5
        public async Task<IActionResult> Details(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }

            List<Rating> ratings = await _service.getAllRatings();
            var rating = ratings.FirstOrDefault(m => m.Id == id);
            if (rating == null)
            {
                return NotFound();
            }

            return View(rating);
        }

        // GET: Ratings/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Ratings/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("RaterName,Explanation,Rate")] Rating rating)
        {
            if (ModelState.IsValid)
            {
                //List<Rating> lRating = await _context.Rating.ToListAsync();
                rating.SubmissionDate = DateTime.Now;
                //rating.Id = lRating.Max(x => x.Id) + 1;
                await _service.Add(rating);
                return RedirectToAction(nameof(Index));
            }
            return View(rating);
        }

        // GET: Ratings/Edit/5
        public async Task<IActionResult> Edit(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }

            var rating = await _service.Get(id);
            if (rating == null)
            {
                return NotFound();
            }
            return View(rating);
        }

        // POST: Ratings/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,RaterName,Explanation,Rate")] Rating rating)
        {
            if (id != rating.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    rating.SubmissionDate = DateTime.Now;
                    await _service.Edit(rating);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!await RatingExists(rating.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(rating);
        }

        // GET: Ratings/Delete/5
        public async Task<IActionResult> Delete(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }

            List<Rating> ratings = await _service.getAllRatings();
            var rating = ratings.FirstOrDefault(m => m.Id == id);
            if (rating == null)
            {
                return NotFound();
            }
            return View(rating);
        }

   
        // POST: Ratings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            await _service.Remove(id);
            return RedirectToAction(nameof(Index));
        }

        private async Task<bool> RatingExists(int id)
        {
            List<Rating> ratings = await _service.getAllRatings();
            return ratings.Any(e => e.Id == id);
        }

        public async Task<IActionResult> Search()
        {
            List<Rating> ratings = await _service.getAllRatings();
            return View(ratings.ToList());
        }

        [HttpPost]
        public async Task<IActionResult> Search(string query)
        {
            List<Rating> ratings = await _service.getAllRatings();
            var q = from rating in ratings
                    where rating.RaterName.Contains(query) || rating.Explanation.Contains(query)
                    select rating;
            return View(q.ToList());
        }
    }
}