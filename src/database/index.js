const { connection } = require('./config');
const Build = require('./config/build');
const { getComments, addCommentQ, deleteCommentQ } = require('./query/comments/comment');
const {
  addFriendsQ,
  getFriend,
  removeFriendQ,
  getMyFriendsQ,
} = require('./query/friends/friends');
const {
  PostQuery,
  getPostsQ,
  updatePostQ,
  deletePostQ,
} = require('./query/post/post');
const { ProfileData, usernameQ } = require('./query/user/ProfileData');
const {
  signupQuery,
  loginQuery,
  getUserDataQ,
  getUserPictureQ,
  addUserPictureQ,
  checkExists,
} = require('./query/user/user');

const {
  remove,
  add,
  checkVote,
  count,
  update,
} = require('./query/votes/vote');

module.exports = {
  signupQuery,
  loginQuery,
  PostQuery,
  ProfileData,
  remove,
  add,
  checkVote,
  count,
  update,
  getComments,
  addCommentQ,
  usernameQ,
  getUserDataQ,
  addFriendsQ,
  getFriend,
  removeFriendQ,
  getMyFriendsQ,
  getUserPictureQ,
  getPostsQ,
  addUserPictureQ,
  updatePostQ,
  deletePostQ,
  deleteCommentQ,
  Build,
  connection,
  checkExists,
};
