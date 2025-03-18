namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public required string Name { get; set; } // Added 'required' modifier
        public double Price { get; set; }
    }
}