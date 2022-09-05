import { allCars } from "./mockData.service.js";

class CarService {
  getAllCars = () => {
    return allCars;
  };

  getCarById = (id) => {
    return allCars.find((i) => i.id === id);
  };
}

export default new CarService();
