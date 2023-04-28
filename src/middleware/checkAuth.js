const { promiseVerify, CustomError } = require('../helpers');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    // res.redirect('/page/login');
    throw new CustomError(400, 'UnAuthorize');
  }

  promiseVerify(token)
    .then((data) => {
      req.userId = data.userId;
      next();
    }).catch((error) => {
      next(error);
    });
};
module.exports = checkAuth;
