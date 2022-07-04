const { Router } = require('express');
const { createUserContr, deleteUserContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();

userRouter.post('/', createUserContr);

userRouter.get('/', createUserContr);

userRouter.patch('/', createUserContr);

userRouter.delete('/:id', deleteUserContr);

module.exports = userRouter;
