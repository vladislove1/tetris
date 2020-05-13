const app = require('./middleware');
const log = require('./middleware/winston')(module);
const config = require('./config');

const server = app.listen(config.app.port, config.app.host, (err) => {
  if (err) throw new Error(err);
  log.info(`Server running at ${config.app.url}:${config.app.port}`);
});

// require('./middleware/websockets')(server);
