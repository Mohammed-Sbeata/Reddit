const { Pool } = require('pg');
require('dotenv').config();

const {
  DEV_DB_URL,
  PRO_DB_URL,
  TEST_DB_URL,
  NODE_ENV,
} = process.env;

let DB_URL = '';

if (NODE_ENV === 'test') {
  DB_URL = TEST_DB_URL;
} else if (NODE_ENV === 'development') {
  DB_URL = DEV_DB_URL;
} else {
  DB_URL = PRO_DB_URL;
}

const options = {
  connectionString: DB_URL,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
};

const connection = new Pool(options);

module.exports = connection;
