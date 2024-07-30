const { Router } = require('express');
const { getMovies, getMovie } = require('../controllers/movie.controller.js');

const movieRouter = Router(); //Ejecutamos Router

movieRouter.get('/', getMovies)
movieRouter.get('/:id', getMovie)

module.exports = movieRouter;