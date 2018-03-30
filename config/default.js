const config = {
  log: {
    name: 'example-node-config',
    level: 'DEBUG',
  },
  database: {
    client: 'mysql',
    connection: {
      host: '',
      port: 3306,
      user: 'root',
      password: '',
      database: '',
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