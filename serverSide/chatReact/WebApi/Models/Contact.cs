using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Contact
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public string ContactUsername { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Server { get; set; }

        public List<Chat> Chats { get; set; }
    }

    public class ContactJson
    {
        public string id { get; set; }

        public string name { get; set; }

        public string server { get; set; }

        public string last { get; set; }

        public string lastdate { get; set; }
    }
}
