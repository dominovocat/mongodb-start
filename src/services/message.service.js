const { ObjectId } = require("mongodb");
const MessageModel = require("../db/models/message");
const userModel = require("../db/models/user");

module.exports.createMessage = async (data) => {
  const Message = MessageModel();
  const User = userModel();

  const author = await User.findOne({ _id: ObjectId(data.author_id) });
  if (!author) {
    throw new Error("404 Author not found");
  }

  const interlocutor = await User.findOne({ _id: ObjectId(data.to_user_id) });
  if (!interlocutor) {
    throw new Error("404 Interlocutor not found");
  }

  const result = await Message.insertOne(data);
  // result.insertedId

  return { _id: result.insertedId, ...data };
};

module.exports.deletedMessageById = async (id) => {
  try {
    const Message = MessageModel();

    const result = await Message.deleteOne({ _id: ObjectId });

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.findMessageById = async (id) => {
  try {
    const Message = MessageModel();

    const result = await Message.findOne({ _id: ObjectId(id) });

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports.findMessage = async (filter, page = 1, rows = 10) => {
  try {
    const Message = MessageModel();

    const result = await Message.find(filter)
      .skip((page - 1) * rows)
      .limit(rows)
      .toArray();

    return result;
  } catch (error) {
    console.log(error);
  }
};
