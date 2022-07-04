const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
body:{
  type:String,
  required:true,
},
author_id:{
  type:mongoose.ObjectId,
  required:true,
},
to_user_id:{
  type:mongoose.ObjectId,
  required:true,
}

});

const messages = mongoose.model("messages", messageSchema);

module.exports = messages;