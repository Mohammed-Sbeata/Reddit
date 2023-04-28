const loginSchema = require('./login');
const { postSchema } = require('./post');
const imageSchema = require('./profileImg');
const signupSchema = require('./signup');

module.exports = {
  loginSchema,
  signupSchema,
  postSchema,
  imageSchema,
};
