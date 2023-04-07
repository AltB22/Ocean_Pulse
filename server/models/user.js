const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: regex here
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model('User', userSchema);

module.exports = User;
//comment
