const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstname: {
    required: true,
    type: "String",
    minLength:3,
    maxLength:32,
  },
  lastname: {
    type: "String",
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min:18,
    max:100,
  },
  address: {
    city: {
      type: String,
      required: true,

    },
    country: {
      type: String,
      enum:["USA","Canada","Brazil","Mexico","Cuba"]
    },
  },
  createdAt: {
    type: Date,
  },
  password: {
    type: String, // TEXT
    required: true,
    set: (password) => {
      const pass_hash = bcrypt.hashSync(password, 10);
      return pass_hash;
    },
  },
});
const User = mongoose.model("users", userSchema);

module.exports = User;
