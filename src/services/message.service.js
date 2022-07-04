const { ObjectId } = require("mongodb");
const userModel = require("../db/models/user");

module.exports.createUser = async (data) => {
  try {
    const User = userModel();

    const result = await User.insertOne(data);
    // result.insertedId

    return result.insertedId;
  } catch (error) {
    console.log(error);
  }
};

module.exports.deletedUserById = async (id) => {
  try {
    const User = userModel();

    const result = await User.deleteOne({ _id: ObjectId });

    return result;
  } catch (error) {
    console.log(error);
  }
};


module.exports.findUserById = async (id) => {
  try {
    const User = userModel();
    
    const result = await User.findOne({ _id: ObjectId(id) });

    return result;
  } catch (error) {
    console.log(error);
  }
};

    module.exports.findMessage = async (filter, page = 1, rows = 10) => {
      try {
        const User = userModel();
    
        const result = await User.find(filter)
          .skip((page - 1) * rows)
          .limit(rows)
          .toArray();
    
        return result;
      } catch (error) {
        console.log(error);
      }
    };