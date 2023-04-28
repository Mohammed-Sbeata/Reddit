const { addCommentQ, usernameQ } = require('../../database');

const addComment = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req;
  const { content } = req.body;
  addCommentQ({ userId, postId, content })
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      req.comment = data.rows[0];
      return usernameQ(userId);
    })
    .then((data) => {
      const { username } = data.rows[0];
      res.status(200).json({
        username,
        comment: req.comment,
      });
    }).catch((error) => next(error));
};

module.exports = addComment;
