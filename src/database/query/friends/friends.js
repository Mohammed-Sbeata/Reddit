const { connection } = require('../../config');

const addFriendsQ = ({ userId, friendId }) => {
  const sql = {
    text: 'INSERT INTO friends (userId, friendId) VALUES ($1, $2) RETURNING *',
    values: [userId, friendId],
  };
  return connection.query(sql);
};

const getFriend = ({ userId, friendId }) => {
  const sql = {
    text: 'SELECT * FROM friends WHERE userId=$1 AND friendId=$2',
    values: [userId, friendId],
  };
  return connection.query(sql);
};

const removeFriendQ = ({ userId, friendId }) => {
  const sql = {
    text: "DELETE FROM friends WHERE userId=$1 AND friendId=$2 RETURNING 'successfully';",
    values: [userId, friendId],
  };
  return connection.query(sql);
};

const getMyFriendsQ = (userId) => {
  const sql = {
    text: 'SELECT username, photo, friendId FROM friends LEFT JOIN users ON users.id=friends.friendId WHERE userId=$1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = {
  addFriendsQ,
  getFriend,
  removeFriendQ,
  getMyFriendsQ,
};
