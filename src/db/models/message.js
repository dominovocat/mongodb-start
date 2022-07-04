const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
body:{
  type:String,
  required:true,
},
author_id:{
  type:mongoose.ObjectId,
  required:true,
  ref:"users",
},
to_user_id:{
  type:mongoose.ObjectId,
  required:true,
  ref:"users",
}

});

const messages = mongoose.model("messages", messageSchema);

module.exports = messages;