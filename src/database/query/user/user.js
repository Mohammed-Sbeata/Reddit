const { connection } = require('../../config');

const signupQuery = (object) => {
  const {
    email,
    password,
    username,
    firstName,
    lastName,
    phone,
  } = object;
  const sql = {
    text: 'INSERT INTO users (email, password, username, firstName, lastName, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, username, firstName, lastName, email',
    values: [email, password, username, firstName, lastName, phone],
  };
  return connection.query(sql);
};

const loginQuery = (object) => {
  const { email } = object;
  const sql = {
    text: 'SELECT password, id FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};

const getUserDataQ = (id) => {
  const sql = {
    text: 'SELECT username, id, photo FROM users WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};

const getUserPictureQ = (id) => {
  const sql = {
    text: 'SELECT photo FROM users WHERE ID=$1',
    values: [id],
  };
  return connection.query(sql);
};

const addUserPictureQ = ({ userId, url }) => {
  const sql = {
    text: 'UPDATE users SET photo=$2 WHERE ID=$1 RETURNING photo',
    values: [userId, url],
  };
  return connection.query(sql);
};

const checkExists = ({ email, username }) => {
  const sql = {
    text: 'select * from users where email=$1 or username=$2',
    values: [email, username],
  };
  return connection.query(sql);
};

module.exports = {
  signupQuery,
  loginQuery,
  getUserDataQ,
  getUserPictureQ,
  addUserPictureQ,
  checkExists,
};
