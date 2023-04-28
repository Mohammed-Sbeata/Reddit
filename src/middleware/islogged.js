const { promiseVerify } = require('../helpers');

// eslint-disable-next-line consistent-return
const isLogged = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next();
  }
  promiseVerify(token)
    .then(() => {
      res.redirect('/');
    }).catch(() => {
      res.clearCookie('token');
      next();
    });
};
module.exports = isLogged;
