const jwt = require('jsonwebtoken');
require('dotenv').config();

const promiseSign = (obj) => new Promise((resolve, reject) => {
  jwt.sign(obj, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
});

const promiseVerify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) {
      reject(err);
    } else {
      resolve(decode);
    }
  });
});
module.exports = { promiseSign, promiseVerify };
