const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: 'Please enter your name!' },
  message: { type: String, trim: true },
});

module.exports = mongoose.model('Message', messageSchema);
