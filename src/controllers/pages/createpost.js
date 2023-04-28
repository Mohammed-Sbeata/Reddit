const { join } = require('path');

const getCreatePost = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'privet', 'createpost.html'));
};

module.exports = getCreatePost;
