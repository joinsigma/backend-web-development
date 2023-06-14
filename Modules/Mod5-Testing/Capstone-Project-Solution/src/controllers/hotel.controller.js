import hotelService from "../services/hotel.service.js";

class HotelController {
  async getHotels(req, res) {
    return res.status(200).json({
      data: await hotelService.getAllHotels(),
    });
  }
  async getHotelById(req, res) {
    const { hotelId } = req.params;
    return res.status(200).json({
      data: await hotelService.getHotelById(+hotelId),
    });
  }

  async createNewHotel(req, res) {
    let result = await hotelService.saveNewHotel(req.body, req.userId);
    if (result) {
      return res.status(201).json({
        data: `New Hotel created ${result}`,
      });
    }
    return res.status(400).json({
      error: `Unable to create new Hotel`,
    });
  }

  async updateHotelById(req, res) {
    const { hotelId } = req.params;
    const result = await hotelService.updateHotelById(+hotelId, req.body);
    if (result) {
      return res.status(200).json({
        data: `Hotel ${hotelId} updated  successfully`,
      });
    }
    return res.status(400).json({
      error: `Unable to update ${hotelId}`,
    });
  }

  async deleteHotelById(req, res) {
    const { hotelId } = req.params;
    const result = await hotelService.deleteHotelById(+hotelId);
    if (result) {
      return res.status(200).json({
        data: `Hotel ${hotelId} deleted successfully`,
      });
    }
  }
}

export default new HotelController();
