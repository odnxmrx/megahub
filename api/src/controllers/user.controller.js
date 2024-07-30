const sql = require('mssql');
const getConnection = require('../database/connection.js');


//GET All Users
const getUsers = async (req,res) => {
  //create pool connection
  const poolConn = await getConnection();

  //execute query
  const result = await poolConn.request().query('SELECT * FROM Users')
  //console.log(result);
  //del objeto 'result' necesito el 'recordset' (es un array)
  res.json(result.recordset);
}

//GET Single User
const getUser = async (req,res) => {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input('userId', sql.VarChar, req.params.id)
    .query('SELECT * FROM Users WHERE userId = @userId')

  //console.log(result);

  //verificar si encontró algo
  if(result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: 'User not found.' });
  }
  
  return res.json(result.recordset[0]);
}

//POST New User
const postUser = async (req,res) => {
  // console.log(req.body);
  const pool = await getConnection();
  const result = await pool
    .request()
    //.input("userId", sql.Int, req.body.userId)
    .input("username", sql.VarChar, req.body.username)
    .input("email", sql.VarChar, req.body.email)
    .input("password", sql.VarChar, req.body.password)
    .query(
      'INSERT INTO Users (username, email, password) VALUES (@username, @email, @password); SELECT SCOPE_IDENTITY() AS id;'
    );

  //console.log(result);
  res.json({
    id: result.recordset[0].id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
}

//UPDATE - PUT User
const updateUser = async (req,res) => {

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("userId", sql.VarChar, req.params.id)
    .input("username", sql.VarChar, req.body.username)
    .input("email", sql.VarChar, req.body.email)
    .input("password", sql.VarChar, req.body.password)
    .query(
      'UPDATE Users SET username = @username, email = @email WHERE userId = @userId'
    );

  //verificar si encontró algo
  if(result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: 'User not found.' });
  }

  return res.json({
    userId: req.params.id,
    username: req.body.username,
    email: req.body.email,
  })

}


//DELETE User
const deleteUser = async (req,res) => {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input('userId', sql.VarChar, req.params.id)
    .query('DELETE FROM Users WHERE userId = @userId')

  if(result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: 'User not found.' });
  }
  
  return res.json({message: 'User was deleted from database.'});
}

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
}