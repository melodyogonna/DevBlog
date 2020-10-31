import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || 'DevBlog',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    database: process.env.DB_TEST || 'DevBlog_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    // username: 'root',
    // password: null,
    // database: process.env.DB_NAME || 'tonorp',
    // host: '127.0.0.1',
    // dialect: 'mysql',
  },
};
