using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Contact
    {
        [Key]
        [Required]
        public string Id { get; set; }


        public string ContactUsername { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Server { get; set; }

        public List<Chat> Chats { get; set; }
    }
}
