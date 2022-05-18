using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Content { get; set; }

        public string Created { get; set; }

        public bool Sent { get; set; }
    }

    public class MessageJson
    {
        public int id { get; set; }

        public string content { get; set; }

        public string created { get; set; }

        public bool sent { get; set; }
    }
}
