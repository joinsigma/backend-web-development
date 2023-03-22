import express from "express";
import userController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("", userController.getAllUsers);
userRouter.get("/:userId", userController.getUserById);

export default userRouter;
