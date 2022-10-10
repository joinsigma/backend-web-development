import { getConnection } from "../models/index.js";
class CarModelService {
  db = getConnection();

  async saveNewCarModel(newCarModel) {
    try {
      const result = await this.db.carModel.create(newCarModel);
      return result.id;
    } catch (err) {
      console.log("Error creating new CarModel", err);
      return null;
    }
  }
}

export default new CarModelService();
