import { getConnection } from "../models/index.js";
const db = getConnection();
const Car = db.car;

class CarService {
  getAllCars = async () => {
    const allCars = await Car.findAll();
    return allCars;
  };

  getCarById = async (id) => {
    const car = await Car.findByPk(id);
    return car;
  };
}

export default new CarService();
