using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class User
    {
        [Key]
        [Required]
        public string Username { get; set; }


        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        public ICollection<Contact> Contacts { get; set; }
    }
}
