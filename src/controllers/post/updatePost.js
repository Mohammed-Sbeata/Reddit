const { updatePostQ } = require('../../database');
const { CustomError } = require('../../helpers');
const { postSchema } = require('../../validation');

const updatePost = (req, res, next) => {
  const {
    postId,
    title,
    content,
    imageUrl,
  } = req.body;
  postSchema.validateAsync({ title }, { abortEarly: false })
    .then(() => {
      updatePostQ({
        postId,
        title,
        content,
        imageUrl,
      }).then(() => {
        res.status(200).json({ error: false });
      })
        .catch((error) => next(new CustomError(401, error.message)));
    });
};

module.exports = updatePost;
