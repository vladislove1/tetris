const path = require('path')

exports.viewIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'));
  };