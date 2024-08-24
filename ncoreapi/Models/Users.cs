using System.ComponentModel.DataAnnotations;

namespace ncoreapi.Models
{

public class User
{
  public int userId { get; set; }

  [Required]
  [StringLength(100, MinimumLength = 3)]
  public string username { get; set; } = string.Empty;

  [Required]
  [EmailAddress]
  public string email { get; set; } = string.Empty;

  [Required]
  public string password { get; set; } = string.Empty;

}
}