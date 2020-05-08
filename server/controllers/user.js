const {
  User,
} = require('../models');

exports.getUserInfo = (req, res) => {
  res.json({ success: true })
};

exports.addUser = (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });

  newUser.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(400).json({ success: false, text: `Error: ${err}` }));
};