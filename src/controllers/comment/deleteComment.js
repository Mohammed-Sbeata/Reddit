const { deleteCommentQ } = require('../../database');

const deleteComment = (req, res, next) => {
  const { commentId } = req.params;
  const { userId } = req;
  deleteCommentQ({ commentId, userId })
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'successfully',
      });
    }).catch((error) => next(error));
};

module.exports = deleteComment;
