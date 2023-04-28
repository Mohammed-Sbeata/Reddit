/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const path = require('path');
const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const { CustomError } = require('../../helpers');

const clientError = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'error', '404.html'));
};
const serverError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: true,
      data: {
        message: err.details,
      },
    });
  }
  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      error: true,
      data: {
        message: 'UnAuthorize',
      },
    });
  }
  if (err instanceof CustomError) {
    return res.status(400).json({
      error: true,
      data: {
        message: err.message,
      },
    });
  }

  res.status(500).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'error', '500.html'));
};
module.exports = { clientError, serverError };
