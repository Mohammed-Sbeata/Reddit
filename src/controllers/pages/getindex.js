const { join } = require('path');

// eslint-disable-next-line consistent-return
const getIndex = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    return res.status(200).redirect('/page/home');
  }
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
};

module.exports = getIndex;
