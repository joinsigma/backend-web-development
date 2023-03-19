import userService from "../services/user.service";

class UserController {
  async getAllUsers(req, res) {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json({
      data: allUsers,
    });
  }

  async getUserById(req, res) {
    const userId = req.param.userId;
    const user = await userService.getUserById(+userId);

    return res.status(200).json({
      data: user,
    });
  }
}

export default new UserController();
