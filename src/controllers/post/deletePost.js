const { deletePostQ } = require('../../database');

const deletePost = (req, res, next) => {
  const { userId } = req;
  const { postId } = req.params;
  deletePostQ({ postId, userId })
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'successfully',
      });
    }).catch((error) => next(error));
};

module.exports = deletePost;
