import { getConnection } from "../models/index.js";

class UserService {
  db = getConnection();
  User = this.db.user;

  getAllUsers = async () => {
    const allUsers = await this.User.findAll();
    return allUsers;
  };

  getUserById = async (id) => {
    const user = await this.User.findByPk(id);
    return user;
  };
}

export default new UserService();
