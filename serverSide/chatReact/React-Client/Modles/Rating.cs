namespace React_Client.Modles
{
    public class Rating
    {
        [Key]
        public string Name { get; set; }

        public string Explanation { get; set; }


        [Range(1, 5,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Rate { get; set; }
    }
}
