const { getMyFriendsQ } = require('../../database');

const getMyFriends = (req, res, next) => {
  const { userId } = req;
  getMyFriendsQ(userId)
    .then((data) => {
      res.status(200).json({
        error: false,
        message: data.rows,
      });
    }).catch((error) => next(error));
};

module.exports = getMyFriends;
