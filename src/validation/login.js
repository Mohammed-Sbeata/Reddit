const Joi = require('joi');

const loginSchema = Joi.object({
  // eslint-disable-next-line no-useless-escape
  email: Joi.string().email().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
  password: Joi.string().min(3).max(20).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required(),
});

module.exports = loginSchema;
