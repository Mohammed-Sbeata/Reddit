const { connection } = require('../../config');

const add = ({ userId, postId, vote }) => {
  const sql = {
    text: 'INSERT INTO votes (userId, postId, vote) VALUES ($1, $2, $3) RETURNING vote',
    values: [userId, postId, vote],
  };

  return connection.query(sql);
};

const update = ({ userId, postId, vote }) => {
  const sql = {
    text: 'UPDATE votes SET vote=$3 WHERE userId=$1 AND postId=$2 RETURNING vote;',
    values: [userId, postId, vote],
  };
  return connection.query(sql);
};

const remove = ({ userId, postId }) => {
  const sql = {
    text: "DELETE FROM votes WHERE userId=$1 AND postId=$2 RETURNING 'successfully';",
    values: [userId, postId],
  };
  return connection.query(sql);
};

const checkVote = ({ userId, postId }) => {
  const sql = {
    text: 'SELECT * FROM votes where userId=$1 and postId=$2;',
    values: [userId, postId],
  };

  return connection.query(sql);
};

const count = ({ postId }) => {
  const sql = {
    text: 'SELECT * FROM VOTES where postId=$1;',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = {
  remove,
  add,
  checkVote,
  count,
  update,
};
