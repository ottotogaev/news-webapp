const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  link: {
    type: String,
    required: false,
  },
  ipAddRemote: {
    type: String,
    required: true,
  },
  ipAddServer: {
    type: String,
    required: true,
  },
  ipAddHeaders: {
    type: String,
    required: true,
  },
  portServer: {
    type: Number,
    required: true,
  },
  portHeader: {
    type: Number,
    required: true,
  },
  currentDate: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema); // 'User' => ModelName
