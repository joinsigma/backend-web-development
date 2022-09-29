import carService from "../services/car.service.js";

class CarController {
  getCars(req, res) {
    return res.status(200).json({
      data: carService.getAllCars(),
    });
  }
  getCarById(req, res) {
    const { carId } = req.params;
    return res.status(200).json({
      data: carService.getCarById(+carId),
    });
  }
}

export default new CarController();
