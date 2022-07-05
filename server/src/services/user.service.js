const { User } = require("../db/");

module.exports.createUser = async (data) => {
  const result = await User.create(data);
  // result.insertedId

  return result;
};

module.exports.deletedUserById = async (id) => {
  const result = await User.deleteOne({ _id: id });
};

module.exports.findUserById = async (id) => {
  const result = await User.findOne({ _id: id });

  return result;
};

module.exports.findUsers = async (filter, page = 1, rows = 10) => {
  const User = userModel();

  const result = await User.find(filter)
    .skip((page - 1) * rows)
    .limit(rows);

  return result;
};

// module.exports.updateUserById = async (id, data = {}) => {
//   const updatedUser = await User.updateOne({ _id: id }, { $set: { ...data } });

//   if (updatedUser.modifiedCount !== 1) {
//     throw new Error("404 User not found");
//   }

//   const foundUser = await User.findOne({ _id: id });

//   return foundUser;
// };
