const Joi = require('joi');
// Offer schema of API and use this for validate the data from API
const Offer = Joi.object({
  offers: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.number().required(),
        merchants: Joi.array()
          .items(
            Joi.object({
              id: Joi.number().required(),
              name: Joi.string().required(),
              distance: Joi.number().required(),
            })
          )
          .required(),
        valid_to: Joi.date().required(),
      }).required()
    )
    .required(),
});

module.exports = Offer;