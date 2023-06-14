import Joi from "joi";

export const loginBody = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const registerBody = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  passport: Joi.string().required(),
  passportExpiry: Joi.date(),
});
