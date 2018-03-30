const config = {
  log: {
    name: 'example-node-config',
    level: 'DEBUG',
  },
  database: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3307,
      user: 'root',
      password: 'r00t',
      database: 'testdb',
      charset: 'utf8mb4',
      timezone: '0000',
    },
    pool: {
      min: 2,
      max: 10,
    },
  }
};

module.exports = config;