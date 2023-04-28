const express = require('express');

const { userRouter } = require('./user');
const { clientError, serverError } = require('../controllers');
const pageRouter = require('./pages/page');
const postRouter = require('./post/post');
const voteRouter = require('./votes');
const friendRouter = require('./friends/friendsRouter');

const router = express.Router();
router.use('/vote', voteRouter);
router.use('/user', userRouter);
router.use('/page', pageRouter);
router.use('/post', postRouter);
router.use('/friends', friendRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
