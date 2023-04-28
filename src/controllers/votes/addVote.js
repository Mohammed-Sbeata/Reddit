const {
  checkVote,
  add,
  count,
  update,
  remove,
} = require('../../database');

const addVote = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req;

  checkVote({ userId, postId, vote: 'up' })
    .then((data) => {
      if (data.rowCount) {
        if (data.rows[0] === 'down') {
          return update({ userId, postId, vote: 'up' });
        }
        return remove({ userId, postId, vote: 'up' });
      }
      return add({ userId, postId, vote: 'up' });
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

module.exports = { addVote };
