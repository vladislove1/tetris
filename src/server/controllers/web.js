const path = require('path')

/* controller/web */

exports.viewIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'));
};
