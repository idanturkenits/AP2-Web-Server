using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Content { get; set; }

        public DateTime Created { get; set; }

        public bool Sent { get; set; }
    }
}
