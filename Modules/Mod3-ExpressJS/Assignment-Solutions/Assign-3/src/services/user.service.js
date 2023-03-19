import { getConnection } from "../models/index.js";
const db = getConnection();
const User = db.user;

class UserService {
  getAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
  };

  getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
  };
}

export default new UserService();
