const mongoose = require("mongoose");

const attachmentsSchema = new mongoose.Schema({
  link: {
    type: String,
    required:true,
  },
  type:{
    type:String,
    enum:["photo","video","http","message","audio"],
    required:true,
  }
});

const messageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  author_id: {
    type: mongoose.ObjectId,
    required: true,
    ref: "users",
  },
  to_user_id: {
    type: mongoose.ObjectId,
    required: true,
    ref: "users",
  },
  isRed: {
    type: Boolean,
    default: false,
  },
  isEdited: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
  },
  attachments: {
    type: [attachmentsSchema],
  },
});

const messages = mongoose.model("messages", messageSchema);

module.exports = messages;
