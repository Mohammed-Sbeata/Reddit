const Joi = require('joi');

const imageSchema = Joi.object({
  url: Joi.string().uri({
    scheme: [
      'http',
      'https',
    ],
    allowRelative: false,
    allowQuerySquareBrackets: true,
  }).required(),
});

module.exports = imageSchema;
