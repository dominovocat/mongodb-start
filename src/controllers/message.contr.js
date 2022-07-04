const { createMessage,deletedMessageById, findMessageById} = require("../services/message.service");

module.exports.createMessageContr = async (req, res, next) => {
  try {
    const data = req.body;

    const createdMessage = await createMessage(data);

    res.status(200).send({ data: createdMessage });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteMessageContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedMessage = await deletedMessageById(id);

    res.status(200).send({ data: deletedMessage });
  } catch (error) {
    next(error);
  }
};

module.exports.findMessageContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const findMessage = await findMessageById(id);

    res.status(200).send({ data: findMessage });
  } catch (error) {
    next(error);
  }
};

module.exports.findMessagesByIdContr = async (req, res, next) => {
  try {
    const filter = req.body;
    const page = req.query.page;
    const rows = req.query.rows;

    const Messages = await findMessages(filter, page, rows);

    res.status(200).send({ data: Messages });
  } catch (error) {
    next(error);
  }
};