import carService from "../services/car.service.js";

class CarController {
  async getCars(req, res) {
    return res.status(200).json({
      data: await carService.getAllCars(),
    });
  }
  async getCarById(req, res) {
    const { carId } = req.params;
    return res.status(200).json({
      data: await carService.getCarById(+carId),
    });
  }
}

export default new CarController();
