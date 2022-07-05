const mongoose = require("mongoose");

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
      enum:["USA","Canada","Brazil","Mexico","Cuba"]
    },
    country: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
