const { createUser,deletedUserById, findUserById} = require("../services/user.service");

module.exports.createUserContr = async (req, res, next) => {
  try {
    const data = req.body;

    const createdUser = await createUser(data);

    res.status(200).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUserContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedUser = await deletedUserById(id);

    res.status(200).send({ data: deletedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.findUserContr = async (req, res, next) => {
  try {
    const id = req.params.id;

    const findUser = await findUserById(id);

    res.status(200).send({ data: findUser });
  } catch (error) {
    next(error);
  }
};
