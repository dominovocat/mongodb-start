const { Router } = require('express');
const { createUserContr, deleteUserContr, findUserContr, findUsersByIdContr } = require("../controllers/user.contr");

// /api/users
const userRouter = Router();


userRouter.get('/messages',(req,res,next)=>{
  //res.send();
  setTimeout(()=>{
    res.send({text:'text test'})
  },15000);
});


userRouter.post('/', createUserContr);

userRouter.get('/:id', findUserContr);
userRouter.get('/:id', findUsersByIdContr);

//userRouter.patch('/', updateUserContr);

userRouter.delete('/:id', deleteUserContr);



module.exports = userRouter;
