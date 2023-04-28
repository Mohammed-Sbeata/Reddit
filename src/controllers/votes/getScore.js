const { count, checkVote } = require('../../database');
const { promiseVerify } = require('../../helpers');

// eslint-disable-next-line consistent-return
const getScore = (req, res, next) => {
  const { postId } = req.params;
  const { token } = req.cookies;

  if (token) {
    promiseVerify(token)
      .then((data) => {
        const { id } = data;
        return id;
      })
      .then((id) => checkVote({ userId: id, postId }))
      .then((data) => {
        if (data.rowCount) {
          if (data.rows[0].vote === 'up') {
            req.class = '#FF4500';
          } else if (data.rows[0].vote === 'down') {
            req.class = '#ccc';
          }
        } else {
          req.class = 'black';
        }
      })
      .catch((err) => next(err));
  }

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
        class: req.class,
        score,
      });
    })
    .catch((err) => next(err));
};

module.exports = getScore;
