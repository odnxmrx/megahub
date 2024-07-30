//para utilizarlo, lo importamos/requerimos
const express = require('express');
const morgan = require('morgan'); //hacemos uso de morgan
const routes = require('./routes/index.js');

//inicializar el server
const server = express(); //suele llamarse 'server o 'app'

//use morgan middleware
server.use(morgan('dev')); //short desc. on console

server.use(express.json()) //poder recibir formato JSON en req.body

server.use(routes);

module.exports = server;