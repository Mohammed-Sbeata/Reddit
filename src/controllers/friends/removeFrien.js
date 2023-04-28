const { removeFriendQ } = require('../../database');

const removeFriend = (req, res, next) => {
  const { userId } = req;
  const { friendId } = req.params;
  removeFriendQ({ userId, friendId })
    .then(() => {
      res.status(200).json({
        message: 'successfully',
      });
    }).catch((error) => next(error));
};

module.exports = removeFriend;
