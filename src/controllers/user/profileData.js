const { ProfileData } = require('../../database');
const { promiseVerify } = require('../../helpers');

const getProfileData = (req, res, next) => {
  promiseVerify(req.cookies.page)
    .then((data) => ProfileData(+data.page))
    .then((data) => {
      res.status(200).clearCookie('page').json(data.rows);
    })
    .catch((err) => next(err));
};

module.exports = getProfileData;
