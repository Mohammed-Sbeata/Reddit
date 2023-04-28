const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email().min(10).max(100)
    .required(),
  username: Joi.string().alphanum().min(8).max(50)
    .required(),
  password: Joi.string().alphanum().min(8).max(50)
    .required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(7).max(10).required(),
});

module.exports = signupSchema;
