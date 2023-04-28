const { connection } = require('../../config');

const getComments = ({ postId }) => {
  const sql = {
    text: 'SELECT username, comments.id, comments.userid, content,date FROM comments LEFT JOIN users ON users.id = comments.userid WHERE comments.postid =$1;',
    values: [postId],
  };

  return connection.query(sql);
};

const addCommentQ = ({ userId, postId, content }) => {
  const sql = {
    text: 'INSERT INTO comments(userId, postId, content) VALUES ($1, $2, $3) RETURNING *',
    values: [userId, postId, content],
  };

  return connection.query(sql);
};

const deleteCommentQ = ({ commentId, userId }) => {
  const sql = {
    text: "DELETE FROM comments WHERE id=$1 AND userid=$2 RETURNING 'successfully';",
    values: [commentId, userId],
  };
  return connection.query(sql);
};

module.exports = {
  getComments,
  addCommentQ,
  deleteCommentQ,
};
