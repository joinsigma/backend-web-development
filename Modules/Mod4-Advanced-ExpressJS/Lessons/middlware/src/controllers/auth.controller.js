import userService from "../services/user.service.js";
import { hashString, compareString } from "../utils/hash.util.js";
import { createToken } from "../utils/jwt.util.js";

class AuthController {
  async login(req, res, next) {
    const body = req.body;
    const user = await userService.findByEmail(body.email);
    if (!user) {
      return res.status(400).json({ data: "User does not exist!" });
    }
    const valid = await compareString(body.password, user.password);
    if (!valid) {
      return res.status(401).json({ data: "Invalid username/password" });
    }

    const payload = {
      userId: user.id,
      expiredAt: Date.now() + 30 * 60 * 1000,
    };
    const token = createToken(payload);
    return res.status(202).json({
      data: token,
    });
  }

  async register(req, res, next) {
    const body = req.body;
    const exists = await userService.findByEmail(body.email);
    if (exists) {
      return res.status(400).json({ data: "Email already exists" });
    }
    body.password = await hashString(body.password);
    const newId = await userService.saveNewUser(body);
    if (!newId) {
      return res.status(400).json({ data: "Unable to register new user" });
    }

    const payload = {
      userId: newId,
      expiredAt: Date.now() + 30 * 60 * 1000,
    };
    const token = createToken(payload);
    return res.status(201).json({
      data: token,
    });
  }
}

export default new AuthController();
