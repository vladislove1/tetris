module.exports = {
  database: {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_BASE}`,
    options: {
      keepAlive: 300000,
      connectTimeoutMS: 30000,

      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,

      // useMongoClient: true,
    },
  },

  redisConf: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },

  app: {
    host: 'localhost',
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
    environment: process.env.NODE_ENV,
  },
};
