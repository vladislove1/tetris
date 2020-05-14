
const {
  ChatMessage,
} = require('../models');

/* controller/chat */

exports.getMessages = (req, res, next) => {
  ChatMessage
    .find({}, {
      _id: 0,

      textMessage: 1,
      userNickname: 1,
    })
    .sort({ created: -1 })
    .exec((err, messages) => {
      if (err) return next(err);
      res.json({ success: true, messages });
    });
};

exports.sendMessage = (req, res, next) => {
  const {
    textMessage,
    userNickname,
  } = req.body;

  const newChatMessage = new ChatMessage({
    textMessage,
    userNickname,
  });

  newChatMessage.save((err) => {
    if (err) return next(err);
    res.json({ success: true });
  })
};
