import Joi from "joi";

export const hotelIdParams = Joi.object({
  carId: Joi.number().integer(),
});
