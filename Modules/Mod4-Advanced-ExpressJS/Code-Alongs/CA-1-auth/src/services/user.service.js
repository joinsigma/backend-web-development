import _omit from "lodash/omit.js";
import { getConnection } from "../models/index.js";

class UserService {
  db = getConnection();

  findByEmail = async (email) => {
    const user = await this.db.user.findOne({
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
      const newUserCreated = await this.db.user.create(newUser);
      return newUserCreated.id;
    } catch (err) {
      console.log("Error creating new User", err);
      return null;
    }
  };

  findByEmailPassword = async (email, password) => {
    const user = await this.db.user.findOne({
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
