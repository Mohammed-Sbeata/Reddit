const { join } = require('path');

const getMyProfile = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'privet', 'myProfile.html'));
};

module.exports = getMyProfile;
