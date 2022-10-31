import express from "express";
import { createValidator } from "express-joi-validation";
import carController from "../controllers/car.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createCarBody,
  carIdParams,
  updateCarBody,
} from "./../validations/car.validation.js";

const validator = createValidator();
const carRouter = express.Router();

carRouter.get("", carController.getCars);
carRouter.post(
  "",
  [authMiddleware, validator.body(createCarBody)],
  carController.createNewCar
);
carRouter.get("/:carId", carController.getCarById);
carRouter.delete("/:carId", carController.deleteCarById);
carRouter.put(
  "/:carId",
  [validator.body(updateCarBody), validator.params(carIdParams)],
  carController.updateCarById
);

export default carRouter;
