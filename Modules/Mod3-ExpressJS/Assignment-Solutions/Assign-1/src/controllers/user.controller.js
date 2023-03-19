import userService from "../services/user.service";

class UserController {
  getAllUsers(req, res) {
    const allUsers = userService.getAllUsers();
    return res.status(200).json({
      data: allUsers,
    });
  }

  getUserById(req, res) {
    const userId = req.param.userId;
    const user = userService.getUserById(userId);

    return res.status(200).json({
      data: user,
    });
  }
}

export default new UserController();
