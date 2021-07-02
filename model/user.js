const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  ipAddRemote: {
    type: String,
    required: true,
  },
  ipAdress: {
    type: String,
    required: true,
  },
  port: {
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
