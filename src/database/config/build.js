const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const Build = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql);
};
if (process.env.NODE_ENV === 'development') {
  Build();
}
module.exports = Build;
