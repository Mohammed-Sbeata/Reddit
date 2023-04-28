const { connection } = require('../../config');

const ProfileData = (id) => {
  const sql = {
    text: 'SELECT username, title, photo, content, posts.id,userId, imageUrl, created_at,firstname, lastname  FROM posts LEFT JOIN users ON users.id = posts.userid WHERE userId=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

const usernameQ = (id) => {
  const sql = {
    text: 'SELECT username, id FROM users WHERE id=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = { ProfileData, usernameQ };
