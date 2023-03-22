import auth0Service from "../services/auth0.service.js";

class AuthController {
  async login(req, res, next) {
    const body = req.body;å
    const token = await auth0Service.login(body.email, body.password);
    return res.status(202).json({
      data: token,
    });
  }

  async register(req, res, next) {
    const body = req.body;
    const token = await auth0Service.register(body);
    return res.status(201).json({
      data: token,
    });
  }
}

export default new AuthController();
