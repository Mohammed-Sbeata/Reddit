const {
  checkVote,
  add,
  count,
  remove,
  update,
} = require('../../database');

const decreaseVote = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req;

  checkVote({ userId, postId, vote: 'down' })
    .then((data) => {
      if (data.rowCount) {
        if (data.rows[0] === 'up') {
          return update({ userId, postId, vote: 'down' });
        }
        return remove({ userId, postId, vote: 'down' });
      }
      return add({ userId, postId, vote: 'down' });
    }).then(() => count({ postId }))
    .then((data) => {
      const up = data.rows.filter((e) => e.vote === 'up').length;
      const down = data.rows.filter((e) => e.vote === 'down').length;
      const score = up - down;
      return score;
    })
    .then((score) => {
      res.status(200).json({
        score,
      });
    })
    .catch((err) => next(err));
};

module.exports = decreaseVote;
