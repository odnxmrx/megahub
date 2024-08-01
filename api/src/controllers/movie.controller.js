const sql = require('mssql');
const getConnection = require('../database/connection.js');


//GET All Movies
const getMovies = async (req, res) => {

  const pool = await getConnection();

  const result = await pool.query('SELECT * FROM Movies');

  res.json(result.recordset);
  //res.send("get all movies");
}


//GET Single Movie
const getMovie = async (req, res) => {

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('movieId', sql.Int, req.params.id)
    .query('SELECT * FROM Movies WHERE movieId = @movieId')
    
  // console.log('respuesta: ', result);
    
  //verificar si encontró algo
  if(result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: 'Movie does not exists.' });
  }

  return res.json(result.recordset[0]);
}

//POST New Movie
const postMovie = async (req, res) => {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("title", sql.NVarChar, req.body.title)
    .input("description", sql.Text, req.body.description)
    .input("poster", sql.VarChar, req.body.poster)
    .input("genre", sql.VarChar, req.body.genre)
    .input("year", sql.SmallDateTime, req.body.year)
    .input("duration", sql.SmallInt, req.body.duration)
    .query('INSERT INTO Movies (title, description, poster, genre, year, duration) VALUES (@title, @description, @poster, @genre, @year, @duration); SELECT SCOPE_IDENTITY() AS movieId;')
    //.query('INSERT INTO Movies (title = @title, description = @description, poster = @poster, genre = @genre, year = @year, duration = @duration)')

    //console.log(result);
    res.json({
      movieId: result.recordset[0].movieId,
      title: req.body.title,
      description: req.body.description,
      poster: req.body.poster,
      genre: req.body.genre,
      year: req.body.year,
      duration: req.body.duration
    })

}

    
module.exports = {
  getMovies,
  getMovie,
  postMovie,
}