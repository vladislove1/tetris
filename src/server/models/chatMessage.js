const mongoose = require('mongoose');

const ChatMessage = new mongoose.Schema({
  userNickname: {
    type: String,
    required: true,
  },

  textMessage: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });


module.exports = mongoose.model('ChatMessage', ChatMessage, 'chat-messages');
