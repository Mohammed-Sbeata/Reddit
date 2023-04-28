const express = require('express');
const {
  addPost,
  getComment,
  addComment,
  updatePost,
  deletePost,
  deleteComment,
} = require('../../controllers');
const checkAuth = require('../../middleware/checkAuth');
const getPosts = require('../../controllers/post/getposts');

const postRouter = express.Router();
postRouter.get('/get', getPosts);
postRouter.get('/comment/:postId', getComment);

postRouter.use(checkAuth);
postRouter.post('/add', addPost);
postRouter.post('/comment/:postId', addComment);
postRouter.post('/update', updatePost);
postRouter.get('/delete/:postId', deletePost);
postRouter.get('/deleteComment/:commentId', deleteComment);
module.exports = postRouter;
