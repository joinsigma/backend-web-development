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

  async createNewCar(req, res) {
    const result = await carService.saveNewCar(req.body);
    if (result) {
      return res.status(201).json({
        data: `New car created ${result}`,
      });
    }
    return res.status(400).json({
      error: `Unable to create new car`,
    });
  }

  async updateCarById(req, res) {
    const { carId } = req.params;
    const result = await carService.updateCarById(+carId, req.body);
    if (result) {
      return res.status(200).json({
        data: `Car ${carId} updated  successfully`,
      });
    }
    return res.status(400).json({
      error: `Unable to update ${carId}`,
    });
  }

  async deleteCarById(req, res) {
    const { carId } = req.params;
    const result = await carService.deleteCarById(+carId);
    if (result) {
      return res.status(200).json({
        data: `Car ${carId} deleted successfully`,
      });
    }
  }
}

export default new CarController();
