// const { ObjectId } = require("mongodb");
// const MessageModel = require("../db/models/message");
// const userModel = require("../db/models/user");

// module.exports.createMessage = async (data) => {
//   const Message = MessageModel();
//   const User = userModel();

//   const author = await User.findOne({ _id: ObjectId(data.author_id) });
//   if (!author) {
//     throw new Error("404 Author not found");
//   }

//   const interlocutor = await User.findOne({ _id: ObjectId(data.to_user_id) });
//   if (!interlocutor) {
//     throw new Error("404 Interlocutor not found");
//   }

//   const result = await Message.create(data);
//   // result.insertedId

//   return { _id: result.insertedId, ...data };
// };

// module.exports.deletedMessageById = async (id) => {
//   try {
//     const Message = MessageModel();

//     const result = await Message.deleteOne({ _id: ObjectId });

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports.findMessageById = async (id) => {
//   try {
//     const Message = MessageModel();

//     const result = await Message.findOne({ _id: ObjectId(id) });

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports.findMessage = async (filter, page = 1, rows = 10) => {
//   try {
//     const Message = MessageModel();

//     const result = await Message.find(filter)
//       .skip((page - 1) * rows)
//       .limit(rows)
//       .toArray();

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };


const { User, Message } = require("../db/");

module.exports.createMessage = async (data) => {
  // check if author and user_to exists
  const author = await User.findById(data.author_id).exec();

  if (!author) {
    throw new Error("404 Author not found");
  }

  const interlocutor = await User.findById(data.to_user_id).exec();
  if (!interlocutor) {
    throw new Error("404 Interlocutor not found");
  }

  const result = await Message.create(data);
  // result.insertedId

  return result;
};

module.exports.deleteMessageById = async (id) => {
  const result = await Message.deleteOne({ _id: id });

  // Message = findOne({ _id: id })

  return result.deletedCount > 0;
};

module.exports.findMessageById = async (id) => {
  const result = await Message.findById(id).exec();

  return result;
};

module.exports.findMessage = async (filter, page = 1, rows = 5) => {
  const results = await Message.find(filter) // WHERE
    .skip((page - 1) * rows) /// OFFSET
    .limit(rows) // LIMIT
    .exec();

  return results;
};

module.exports.updateMessageById = async (id, data = {}) => {
  // delete author_id and user_to fields

  const updatedMessage = await Message.updateOne({ _id: id }, { $set: { ...data } });

  if (updatedMessage.modifiedCount !== 1) {
    throw new Error("404 Message not found");
  }

  const foundMessage = await Message.findById(id).exec();

  return foundMessage;
};