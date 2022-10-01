import { getConnection } from "../models/index.js";
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
      const newCar = await this.db.car.create(newCarData);
      console.log(newCar.toJSON());
      return newCar.id;
    } catch (err) {
      console.log("Error creating new Car", err);
      return null;
    }
  };

  updateCarById = async (carId, updatedCarData) => {
    try {
      const updatedCar = await this.db.car.update(
        { ...updatedCarData },
        {
          where: {
            id: carId,
          },
        }
      );
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
