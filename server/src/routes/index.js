const { Router } = require('express');
const messageRouter = require('./message.router');
const userRouter = require("./user.router");

const router = Router();

router.use("/users", userRouter);
router.use("/messages", messageRouter);

module.exports = router;
