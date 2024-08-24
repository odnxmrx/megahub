using System.ComponentModel.DataAnnotations;

namespace ncoreapi.Models
{

  public class Movie
  {
    public int movieId { get; set; }

    [Required]
    public string title { get; set; } = string.Empty;

    [Required]
    public string description { get; set; } = string.Empty;

    public string poster { get; set; } = string.Empty;
    
    public string genre { get; set; } = string.Empty;
    
    public DateTime year { get; set; }

    public short duration { get; set; }

  }

}