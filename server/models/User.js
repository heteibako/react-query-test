const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
});

module.exports = User = mongoose.model('User', UserSchema);
