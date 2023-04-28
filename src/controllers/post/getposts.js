const { getPostsQ } = require('../../database');

const getPosts = (req, res, next) => {
  getPostsQ()
    .then((data) => {
      if (data.rowCount > 0) {
        res.status(200).json(data.rows);
      } else {
        const defaultPost = [{
          title: 'alaa',
          content: 'nothing',
          imageUrl: 'https://media.wired.com/photos/5954a1b2be605811a2fdd8e7/191:100/w_1280,c_limit/reddit-alien-red.jpg',
        }];
        res.status(200).json(defaultPost);
      }
    }).catch((error) => next(error));
};

module.exports = getPosts;
