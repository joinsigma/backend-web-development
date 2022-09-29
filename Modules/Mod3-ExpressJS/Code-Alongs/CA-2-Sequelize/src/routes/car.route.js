import express from "express";
import carController from "../controllers/car.controller.js";

const carRouter = express.Router();

carRouter.get("", carController.getCars);
carRouter.get("/:carId", carController.getCarById);

export default carRouter;
