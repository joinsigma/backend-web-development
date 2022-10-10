import _omit from "lodash/omit.js";
import { getConnection } from "../models/index.js";
import carModelService from "./carModel.service.js";

class CarService {
  db = getConnection();

  getAllCars = async () => {
    const allCars = await db.car.findAll();
    return allCars;
  };

  getCarById = async (id) => {
    const car = await db.car.findByPk(id);
    return car;
  };

  saveNewCar = async (newCarData) => {
    try {
      const { id: carModelId } = newCarData.carModel;
      newCarData = _omit(newCarData, ["carModel"]);
      const newCar = await this.db.car.create({ carModelId, ...newCarData });
      console.log(newCar.toJSON());
      return newCar.id;
    } catch (err) {
      console.log("Error creating new Car", err);
      return null;
    }
  };

  saveNewCarWithNewModel = async (newCarData) => {
    try {
      const carModelId = await carModelService.saveNewCarModel(
        newCarData.carModel
      );
      if (!carModelId) {
        throw new Error("Unable to create CarModel");
      }
      newCarData = _omit(newCarData, ["carModel"]);
      const newCar = await this.db.car.create({ carModelId, ...newCarData });
      return newCar.id;
    } catch (err) {
      console.log("Error creating new Car", err);
      return null;
    }
  };

  updateCarById = async (carId, updatedCarData) => {
    try {
      const updatedCar = await this.db.car.update(updatedCarData, {
        where: {
          id: carId,
        },
      });
      return updatedCar.id;
    } catch (err) {
      console.log("Error updating Car");
      return null;
    }
  };

  deleteCarById = async (carId) => {
    try {
      await this.db.car.destroy({
        where: {
          id: carId,
        },
      });
      return true;
    } catch (err) {
      console.log("Error deleting Car");
      return null;
    }
  };
}

export default new CarService();
