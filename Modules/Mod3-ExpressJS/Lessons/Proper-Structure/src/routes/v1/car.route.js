import carController from "../../controllers/car.controller.js";
import express from "express";
const router = express.Router();

router.route("/").get(carController.getAllCars);
router.route("/:carId").get(carController.getCarById);

export default router;
