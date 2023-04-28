const { join } = require('path');

const getSignup = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'privet', 'signup.html'));
};

module.exports = getSignup;
