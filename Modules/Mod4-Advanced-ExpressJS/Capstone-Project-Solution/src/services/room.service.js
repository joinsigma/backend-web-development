import { getConnection } from "../models/index.js";

class RoomService {
  db = getConnection();

  async saveNewRoom(newRoom) {
    try {
      const result = await this.db.room.create(newRoom);
      return result.id;
    } catch (err) {
      console.log("Error creating new RoomModel", err);
      return null;
    }
  }
}

export default new RoomService();
