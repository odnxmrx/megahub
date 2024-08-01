const { Router } = require('express');
const { getMovies, getMovie, postMovie } = require('../controllers/movie.controller.js');

const movieRouter = Router(); //Ejecutamos Router

movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovie);
movieRouter.post('/', postMovie);

module.exports = movieRouter;