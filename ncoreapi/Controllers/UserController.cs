using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ncoreapi.Data;
using ncoreapi.Models;

namespace ncoreapi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UserController : ControllerBase
  {
    //Data Context
    private readonly DataContext _context;
        
        //genera contructor 'UserController'
        public UserController(DataContext context)
        {
            _context = context;
        }

    //GET Single User by username
    [HttpGet]
    [Route("{username}")]
    public async Task<ActionResult<User>> GetUser(string username)
    {
      var myUser = await _context.Users.FirstOrDefaultAsync(user => user.username == username);

      if(myUser == null)
        return NotFound("User not found.");

      return Ok(myUser);
    }

    //POST - Create User
    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      return CreatedAtAction(nameof(GetUser),
        new { username = user.username },
        user
      );

    }


    //DELETE
    [HttpDelete("{userId}")]
    public async Task<ActionResult<Movie>> DeleteUser(int userId)
    {
      var myUser = await _context.Users.FindAsync(userId);

      _context.Users.Remove(myUser);
      await _context.SaveChangesAsync();

      return Ok("User was deleted.");

    }


    }
}