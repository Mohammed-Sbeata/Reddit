const friendRouter = require('express').Router();
const { checkAuth } = require('../../middleware');

const {
  addFriends,
  checkFriend,
  removeFriend,
  getMyFriends,
} = require('../../controllers');

friendRouter.use(checkAuth);
friendRouter.get('/add/:friendId', addFriends);
friendRouter.get('/check/:friendId', checkFriend);
friendRouter.get('/remove/:friendId', removeFriend);
friendRouter.get('/myFriends', getMyFriends);

module.exports = friendRouter;
