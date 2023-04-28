const voteRouter = require('express').Router();

const { checkAuth } = require('../../middleware');
const {
  addVote,
  decreaseVote,
  getScore,
  getSIndexScore,
} = require('../../controllers');

voteRouter.get('/get/index/:postId', getSIndexScore);
voteRouter.get('/get/:postId', getScore);
voteRouter.get('/add/:postId', checkAuth, addVote);
voteRouter.get('/decrease/:postId', checkAuth, decreaseVote);
module.exports = voteRouter;
