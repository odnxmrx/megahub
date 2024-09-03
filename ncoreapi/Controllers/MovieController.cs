using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ncoreapi.Data;
using ncoreapi.Models;

namespace ncoreapi.Controllers
{

  [ApiController]
  [Route("api/[controller]")] //'controller' es el nombre 'Movie' (de MovieController)
  public class MovieController : ControllerBase
  {

    //inject out Data context
    private readonly DataContext _context;

      //Genera constructor 'Moviecontroller' con param 'context'
      public MovieController(DataContext context)
      {
          _context = context;
      }

      //GET All Movies
      [HttpGet]
      public async Task<ActionResult<List<Movie>>> GetAllMovies()
      {
        var myMovies = await _context.Movies.ToListAsync();

        return Ok(myMovies);
      }


      //GET Single Movie - by Id
      [HttpGet]
      [Route("{movieId}")]
      public async Task<ActionResult<Movie>> GetMovie(int movieId)
      {
        var myMovie = await _context.Movies.FindAsync(movieId);

        if(myMovie == null)
          return NotFound("Not such movie.");

        return Ok(myMovie);
      }

      //GET Movies - by title
      [HttpGet]
      [Route("title/{movieTitle}")]
      public async Task<ActionResult<IEnumerable<Movie>>> SearchMovieByTitle(string movieTitle)
      {
          var matchingMovies = await _context.Movies
            .Where(mov => mov.title.ToLower().Contains(movieTitle.ToLower()))
            .ToListAsync();

          if (matchingMovies == null || matchingMovies.Count == 0)
              return NotFound("No movies with given title.");

          return Ok(matchingMovies);
      }


      //POST - Create new Movie
      [HttpPost]
      public async Task<ActionResult<List<Movie>>> PostMovie(Movie movie) //[FromBody] <- ya lo sabe
      {
      //using unique model for Movie Insert

        _context.Movies.Add(movie);
        await _context.SaveChangesAsync();

        //return Ok(await _context.Movies.ToListAsync());
        return CreatedAtAction(nameof(GetMovie),
          new { movieId = movie.movieId },
          movie
        );
        
      }

      //PUT - Update registry
      [HttpPut("{movieId}")]
      //[Route("{movieId}")]
      public async Task<ActionResult<Movie>> UpdateMovie(int movieId, Movie updateMovie)
      //infiere que el Id lo tomará de param, y 'Movie' de Body
      {
        var myMovie = await _context.Movies.FindAsync(movieId);

        if(myMovie == null)
          return NotFound("Not such movie.");

        //map the data
        myMovie.title = updateMovie.title;
        myMovie.description = updateMovie.description;
        myMovie.poster = updateMovie.poster;
        myMovie.genre = updateMovie.genre;
        myMovie.year = updateMovie.year;
        myMovie.duration = updateMovie.duration;

        await _context.SaveChangesAsync();

        return Ok(myMovie);
        //return NoContent();
      }


      //DELETE Movie from Db
      [HttpDelete("{movieId}")]
      public async Task<ActionResult<Movie>> DeleteMovie(int movieId)
      {
        var myMovie = await _context.Movies.FindAsync(movieId);

        if(myMovie == null)
          return NotFound("Movie not found.");

        _context.Movies.Remove(myMovie);
        await _context.SaveChangesAsync();

        return Ok(await _context.Movies.ToListAsync());
      }

  }
}