const { getUserPictureQ } = require('../../database');

const getUserPicture = (req, res, next) => {
  const { userId } = req;
  getUserPictureQ(userId)
    .then((data) => {
      if (!data.rows[0].photo) {
        return res.status(200).json({
          error: false,
          img: '../../image/image_add_regular_icon_204373.png',
        });
      }
      return res.status(200).json({
        error: false,
        img: data.rows[0].photo,
      });
    }).catch((error) => next(error));
};

module.exports = getUserPicture;
