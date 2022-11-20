import Joi from "joi";

export const carIdParams = Joi.object({
  carId: Joi.number().integer(),
});

export const createCarBody = Joi.object({
  carLotId: Joi.number().integer().required(),
  carModel: Joi.object({
    id: Joi.number().integer(),
    name: Joi.string(),
    make: Joi.string(),
    year: Joi.number().integer(),
    transmission: Joi.string().allow("auto", "manual"),
    bodyType: Joi.number().integer(),
    createdBy: Joi.number().integer(),
  }).required(),
  colour: Joi.string().default("black"),
  price: Joi.number().required(),
  regNo: Joi.string(),
  regDate: Joi.date(),
  initialMileage: Joi.number().integer(),
  status: Joi.string().default(null),
});

export const updateCarBody = Joi.object({
  carLotId: Joi.number().integer(),
  carModelId: Joi.number().integer(),
  colour: Joi.string().default("black"),
  price: Joi.number(),
  regNo: Joi.string(),
  regDate: Joi.date(),
  initialMileage: Joi.number().integer(),
  status: Joi.string().default(null),
  createdBy: Joi.string(),
});
