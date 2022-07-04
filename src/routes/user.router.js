const { Router } = require('express');
const { createUserContr, deleteUserContr, findUserContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();

userRouter.post('/', createUserContr);

userRouter.get('/:id', findUserContr);

userRouter.patch('/', createUserContr);

userRouter.delete('/:id', deleteUserContr);

module.exports = userRouter;
