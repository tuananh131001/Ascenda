import Joi from "joi";
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
export default Offer;
