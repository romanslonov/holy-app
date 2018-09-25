const development = {
  database: 'holydb',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port: '32778',
  dialect: 'mysql',
};

const testing = {
  database: 'holydb-test',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port: '32778',
  dialect: 'mysql',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT,
  dialect: 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};
