const router = require('express').Router();

const {
  chat,
} = require('../controllers');

/* route/chat */

router.get('/messages', chat.getMessages);
router.post('/messages', chat.sendMessage);

module.exports = router;
