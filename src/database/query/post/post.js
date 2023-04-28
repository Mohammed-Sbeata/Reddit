const { connection } = require('../../config');

const PostQuery = (object) => {
  const {
    title,
    content,
    imageUrl,
    id,
  } = object;
  const sql = {
    text: 'insert into posts (title, content, imageUrl, userId ) VALUES ($1, $2, $3, $4) RETURNING title , content , imageUrl',
    values: [title, content, imageUrl, id],
  };
  return connection.query(sql);
};

const getPostsQ = () => {
  const sql = {
    text: `SELECT
    posts.id,
    posts.title,
    posts.content,
    posts.imageUrl,
    posts.created_at,
    users.username,
    users.photo,
    posts.userId,
    COUNT(DISTINCT comments.id) AS comment_count,
    COUNT(
      DISTINCT CASE
      WHEN votes.vote = 'down' THEN votes.id
  END
) AS downVotes
FROM posts
JOIN users ON posts.userid = users.id
LEFT JOIN comments ON posts.id = comments.postid
LEFT JOIN votes ON posts.id = votes.postid
GROUP BY
users.photo,
posts.id,
users.username
ORDER BY COUNT(DISTINCT CASE WHEN votes.vote
= 'down' THEN votes.id END) - COUNT(DISTINCT CASE WHEN votes.vote = 'up' THEN votes.id END) DESC;`,

  };

  return connection.query(sql);
};

const updatePostQ = ({
  postId,
  title,
  content,
  imageUrl,
}) => {
  const sql = {
    text: 'UPDATE posts SET title=$2, content=$3, imageUrl=$4 WHERE id=$1 RETURNING imageUrl',
    values: [postId, title, content, imageUrl],
  };
  return connection.query(sql);
};

const deletePostQ = ({ postId, userId }) => {
  const sql = {
    text: "DELETE FROM posts WHERE id=$1 AND userid=$2 RETURNING 'successfully';",
    values: [postId, userId],
  };
  return connection.query(sql);
};

module.exports = {
  PostQuery,
  getPostsQ,
  updatePostQ,
  deletePostQ,
};
