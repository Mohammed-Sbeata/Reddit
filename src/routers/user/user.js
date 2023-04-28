const express = require('express');

const {
  login,
  signup,
  logout,
  getUserData,
  getMyProfileData,
  getProfileData,
  getUserPicture,
  addUserPicture,
} = require('../../controllers');
const { checkAuth, isLogged } = require('../../middleware');

const userRouter = express.Router();

userRouter.get('/profile', getProfileData);
userRouter.post('/image', checkAuth, addUserPicture);
userRouter.get('/getImg', checkAuth, getUserPicture);
userRouter.get('/myProfile', checkAuth, getMyProfileData);
userRouter.get('/logout', checkAuth, logout);
userRouter.get('/data', checkAuth, getUserData);

userRouter.use(isLogged);
userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;
