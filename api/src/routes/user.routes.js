const { Router } = require('express');
const { getUsers, getUser, postUser, updateUser, deleteUser } = require('../controllers/user.controller.js');

//Ejecutamos router
const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', postUser);

userRouter.put('/:id', updateUser)

userRouter.delete('/:id', deleteUser)


module.exports = userRouter;