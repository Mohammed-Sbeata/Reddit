const { join } = require('path');

const getLogin = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'privet', 'login.html'));
};

module.exports = getLogin;
