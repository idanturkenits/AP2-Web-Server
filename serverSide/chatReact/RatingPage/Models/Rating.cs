using System.ComponentModel.DataAnnotations;

namespace RatingPage.Models
{
    public class Rating
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name ="Full Name")]
        public string? RaterName { get; set; }

        [Required]
        public string? Explanation { get; set; }

        [Required]
        [Range(1, 5,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Rate { get; set; }

        public DateTime SubmissionDate { get; set; }
    }
}
