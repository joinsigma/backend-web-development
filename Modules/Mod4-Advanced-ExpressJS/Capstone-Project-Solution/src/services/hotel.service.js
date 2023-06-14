import _omit from "lodash/omit.js";
import { getConnection } from "../models/index.js";

class HotelService {
  db = getConnection();

  getAllHotels = async () => {
    const allHotels = await this.db.hotel.findAll();
    return allHotels;
  };

  getHotelById = async (id) => {
    const car = await this.db.hotel.findByPk(id);
    return car;
  };

  saveNewHotel = async (newHotelData, userId) => {
    try {
      const newHotel = await this.db.car.create({
        createdBy: userId,
        ...newHotelData,
      });
      return newHotel.id;
    } catch (err) {
      console.log("Error creating new Hotel", err);
      return null;
    }
  };

  updateHotelById = async (hotelId, updatedHotelData) => {
    try {
      const updatedHotel = await this.db.hotel.update(updatedHotelData, {
        where: {
          id: hotelId,
        },
      });
      return updatedHotel.id;
    } catch (err) {
      console.log("Error updating Hotel");
      return null;
    }
  };

  deleteHotelById = async (hotelId) => {
    try {
      await this.db.hotel.destroy({
        where: {
          id: hotelId,
        },
      });
      return true;
    } catch (err) {
      console.log("Error deleting Hotel");
      return null;
    }
  };
}

export default new HotelService();
