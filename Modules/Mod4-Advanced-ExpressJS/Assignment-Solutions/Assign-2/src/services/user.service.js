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

  findByEmail = async (email) => {
    const user = await this.User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return;
    }
    return user;
  };

  saveNewUser = async (newUser) => {
    try {
      const newUserCreated = await this.User.create(newUser);
      return newUserCreated.id;
    } catch (err) {
      console.log("Error creating new User", err);
      return null;
    }
  };

  findByEmailPassword = async (email, password) => {
    const user = await this.User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      return;
    }
    return user;
  };
}

export default new UserService();
