const { getComments } = require('../../database');

const getComment = (req, res, next) => {
  const { postId } = req.params;
  getComments({ postId })
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => next(err));
};

module.exports = getComment;
