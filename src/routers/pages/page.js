const express = require('express');
const {
  getHome,
  getIndex,
  getLogin,
  getSignup,
  getCreatePost,
  getProfile,
  getMyProfile,
} = require('../../controllers');
const { checkAuth, isLogged } = require('../../middleware');

const pageRouter = express.Router();

pageRouter.get('/myProfile/', checkAuth, getMyProfile);
pageRouter.get('/home', checkAuth, getHome);
pageRouter.get('/createpost', checkAuth, getCreatePost);

pageRouter.get('/profile/:userId', getProfile);

pageRouter.use(isLogged);
pageRouter.get('/index', getIndex);
pageRouter.get('/login', getLogin);
pageRouter.get('/signup', getSignup);

module.exports = pageRouter;
