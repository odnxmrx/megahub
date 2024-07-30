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
    
module.exports = {
  getMovies,
  getMovie,
}