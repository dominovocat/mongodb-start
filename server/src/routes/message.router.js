const { Router } = require('express');
const { createMessageContr, deleteMessageContr, findMessageContr, findMessagesByIdContr } = require("../controllers/message.contr");
const { createMessageValidateBodyMw } = require('../middlewares/message.mw');

// /api/Messages
const MessageRouter = Router();

MessageRouter.post('/', createMessageContr);

MessageRouter.get('/:id', findMessageContr);
MessageRouter.get('/:id', findMessagesByIdContr);

//MessageRouter.patch('/', updateMessageContr);

MessageRouter.delete('/:id', deleteMessageContr);

module.exports = MessageRouter;