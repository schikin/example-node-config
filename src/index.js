const config = require('config');

const dbConfig = config.get('database');

console.log(`logLevel is ${config.get('log.level')}`);
console.log(`dbConfig is ${JSON.stringify(dbConfig)}`);
