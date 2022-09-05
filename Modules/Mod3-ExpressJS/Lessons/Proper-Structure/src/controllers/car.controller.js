import carService from "../services/car.service.js";

class CarController {
  getAllCars = (req, res) => {
    const allCars = carService.getAllCars();
    res.json({ data: allCars });
  };

  getCarById = (req, res) => {
    const carId = req.params.carId;
    const foundCar = carService.getCarById(+carId);
    if (!foundCar) {
      res.status(404);
      return;
    }
    res.json({
      data: foundCar,
    });
  };
}

export default new CarController();
