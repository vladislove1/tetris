const chalk = require('chalk');

module.exports = (server) => {
  global.io = require('socket.io').listen(server);

  global.io.on('connection', (socket) => {
    chalk.blue('New connection');
    // socket.on('disconnect', () => {});
  });
};
