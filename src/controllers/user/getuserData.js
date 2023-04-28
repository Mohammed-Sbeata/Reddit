const { getUserDataQ } = require('../../database');
const { promiseVerify } = require('../../helpers');

const getUserData = (req, res, next) => {
  const { token } = req.cookies;
  promiseVerify(token)
    .then((data) => getUserDataQ(data.userId))
    .then((data) => {
      res.status(200).json({
        user: data.rows[0],
      });
    })
    .catch((error) => next(error));
};

module.exports = getUserData;
