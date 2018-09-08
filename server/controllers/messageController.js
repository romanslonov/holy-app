const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.createMessage = async (req, res) => {
  const message = await (new Message(req.body)).save();
  res.status(201);
  res.json({ message: 'Message was created!' });
};

exports.getMessages = async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
};
