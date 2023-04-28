const { join } = require('path');
const { promiseSign } = require('../../helpers');

const getProfile = (req, res, next) => {
  const { userId } = req.params;
  promiseSign({ page: userId })
    .then((data) => {
      res.status(200).cookie('page', data)
        .sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'profile', 'profile.html'));
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = getProfile;
