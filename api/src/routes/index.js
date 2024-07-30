const { Router } = require('express');
const userRouter = require('./user.routes.js');
const movieRouter = require('./movie.routes.js');

const router = Router(); //ejecutamos router

//configuracion de rutas
router.use('/users', userRouter);
router.use('/movies', movieRouter),

module.exports = router;
