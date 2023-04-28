const { PostQuery } = require('../../database');
const { CustomError } = require('../../helpers');
const { postSchema } = require('../../validation');

const addPost = (req, res, next) => {
  const { title } = req.body;
  postSchema.validateAsync({ title }, { abortEarly: false })
    .then(() => ({ ...req.body, id: req.userId }))
    .then((data) => PostQuery(data))
    .then(() => {
      res.status(200).json({ error: false });
    })
    .catch((error) => next(new CustomError(401, error.message)));
};

module.exports = addPost;
