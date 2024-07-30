const sql = require('mssql');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_SERVER, DB } = process.env

const sqlConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  server: DB_SERVER,
  database: DB,
  //pool: {}
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}


const getConnection = async () => {
  try {
    //creamos pool de conexiones, que es lo que se utilizará
    const pool = await sql.connect(sqlConfig);
    return pool;
    
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = getConnection;