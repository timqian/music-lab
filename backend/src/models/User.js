// get an instance of mongoose and mongoose.Schema
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model and export
const User = mongoose.model('User', new Schema({
  email: String,
  name: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  verified: Boolean,
}));

module.exports =  User;
