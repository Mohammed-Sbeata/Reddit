const { join } = require('path');

const getHome = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'privet', 'home.html'));
};

module.exports = getHome;
