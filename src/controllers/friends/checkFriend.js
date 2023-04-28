const { getFriend } = require('../../database');

const checkFriend = (req, res, next) => {
  const { userId } = req;
  const { friendId } = req.params;
  getFriend({ userId, friendId })
    .then((data) => {
      if (data.rowCount) {
        res.status(200).json({
          friend: true,
        });
      } else {
        res.status(200).json({
          friend: false,
        });
      }
    }).catch((error) => next(error));
};

module.exports = checkFriend;
