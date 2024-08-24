using Microsoft.EntityFrameworkCore;
using ncoreapi.Models;

namespace ncoreapi.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Movie> Movies { get; set; }

    public DbSet<User> Users { get; set; }

    //Connection string

  }

}