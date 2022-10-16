import carService from "../services/car.service.js";

class CarController {
  async getCars(req, res, next) {
    try {
      const allCars = carService.getAllCars();
      throw new Error("Testing error");
      return res.json({ data: allCars });
    } catch (error) {
      next(error);
    }
  }
  async getCarById(req, res) {
    const { carId } = req.params;
    return res.status(200).json({
      data: await carService.getCarById(+carId),
    });
  }

  async createNewCar(req, res) {
    const body = req.body;
    let result;
    if (body.carModel.id) {
      result = await carService.saveNewCar(req.body);
    } else {
      result = await carService.saveNewCarWithNewModel(req.body);
    }
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
