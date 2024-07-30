require('dotenv').config(); //trabajar con .env
const server =  require('./src/app.js');

//const getConnection = require('./src/database/connection.js');

const { SERVER_PORT } = process.env || 3001; //traer puerto de .env

//getConnection(); //ejecutar conexion db

//levantar un listener en puerto
server.listen(SERVER_PORT, ()=>{ //1er param: puerto. 2do param: callback
    console.log(`Server listening on port ${SERVER_PORT}`);
})