const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(3).max(100)
    .required(),
});
module.exports = { postSchema };
