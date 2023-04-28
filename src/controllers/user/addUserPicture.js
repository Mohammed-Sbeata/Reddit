const { addUserPictureQ } = require('../../database');
const { imageSchema } = require('../../validation');

const addUserPicture = (req, res, next) => {
  const { userId } = req;
  const { url } = req.body;
  imageSchema.validateAsync(
    { url },
    {
      abortEarly: false,
    },
  ).then((data) => addUserPictureQ({ userId, url: data.url }))
    .then((data) => {
      res.status(200).json({
        error: false,
        url: data.rows[0].photo,
      });
    })
    .catch((error) => next(error));
};

module.exports = addUserPicture;
