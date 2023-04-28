const { count } = require('../../database');

const getSIndexScore = (req, res, next) => {
  const { postId } = req.params;
  count({ postId })
    .then((data) => {
      const up = data.rows.filter((e) => e.vote === 'up').length;
      const down = data.rows.filter((e) => e.vote === 'down').length;
      const score = up - down;
      return score;
    })
    .then((score) => {
      res.status(200).json({
        error: false,
        score,
      });
    })
    .catch((err) => next(err));
};

module.exports = getSIndexScore;
