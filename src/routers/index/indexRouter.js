const indexRouter = require('express').Router();

const { getIndex } = require('../../controllers');

indexRouter.get('/', getIndex);

module.exports = indexRouter;
