const { Router } = require('express');
const { createUserContr, deleteUserContr, findUserContr, findUsersByIdContr } = require("../controllers/user.contr");

// /api/users
const messageRouter = Router();

userRouter.post('/', createUserContr);

userRouter.get('/:id', findUserContr);
userRouter.get('/:id', findUsersByIdContr);

userRouter.patch('/', updateUserContr);

userRouter.delete('/:id', deleteUserContr);

module.exports = messageRouter;