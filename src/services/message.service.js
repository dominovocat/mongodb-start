const { ObjectId } = require("mongodb");
const MessageModel = require("../db/models/message");

module.exports.createMessage = async (data) => {
  try {
    const Message = MessageModel();

    const result = await Message.insertOne(data);
    // result.insertedId

    return result.insertedId;
  } catch (error) {
    console.log(error);
  }
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