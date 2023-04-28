const { addFriendsQ, getFriend } = require('../../database');

const addFriends = (req, res, next) => {
  const { userId } = req;
  const { friendId } = req.params;
  getFriend({ userId, friendId })
    .then((data) => {
      if (!data.rowCount) {
        return addFriendsQ({ userId, friendId });
      }
      return res.status(200).json({
        error: true,
        message: 'its actually yor friend',
      });
    })
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'successfully',
      });
    }).catch((error) => next(error));
};

module.exports = addFriends;
