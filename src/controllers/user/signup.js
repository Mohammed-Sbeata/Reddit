const bcrypt = require('bcrypt');
const { CustomError } = require('../../helpers');

const { signupQuery, checkExists } = require('../../database');
const { signupSchema } = require('../../validation');

const signup = (req, res, next) => {
  const { password, email, username } = req.body;
  signupSchema.validateAsync(req.body, { abortEarly: false })
    .then(checkExists)
    .then((data) => {
      if (data.rowCount) {
        if (data.rows[0].email === email) {
          throw new CustomError(400, 'This email already exists');
        } else if (data.rows[0].username === username) {
          throw new CustomError(400, 'This username already exists');
        }
      }
    })
    .then(() => bcrypt.hash(password, 10))
    .then((data) => {
      req.body.password = data;
      return signupQuery(req.body);
    })
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'signup successfully',
      });
    })
    .catch((error) => next(error));
};

module.exports = signup;
