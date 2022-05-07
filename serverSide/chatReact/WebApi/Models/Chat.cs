using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Chat
    {

        [Key]
        public int Id { get; set; }

        public string ContactId { get; set; }

        public List<Message> Messagges { get; set; }
    }
}
