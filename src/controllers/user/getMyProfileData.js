const { ProfileData, usernameQ } = require('../../database');

const getMyProfileData = (req, res, next) => {
  ProfileData(req.userId)
    .then((data) => {
      if (data.rowCount) {
        return res.status(200).json(data.rows);
      }
      return usernameQ(req.userId)
        .then((result) => res.status(200).json(result.rows));
    }).catch((error) => next(error));
};

module.exports = getMyProfileData;
