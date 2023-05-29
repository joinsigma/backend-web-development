import express from "express";
import { createValidator } from "express-joi-validation";
import hotelController from "../controllers/hotel.controller.js";
import { hotelIdParams } from "../validations/hotel.validation.js";

const validator = createValidator();
const hotelRouter = express.Router();

hotelRouter.get("", hotelController.getHotels);
// hotelRouter.post(
//   "",
//   [authMiddleware, validator.body()],
//   hotelController.createNewHotel
// );
hotelRouter.get("/:hotelId", hotelController.getHotelById);
hotelRouter.delete(
  "/:hotelId",
  [validator.params(hotelIdParams)],
  hotelController.deleteHotelById
);
// hotelRouter.put(
//   "/:hotelId",
//   [validator.body(), validator.params(hotelIdParams)],
//   hotelController.updateHotelById
// );

export default hotelRouter;
