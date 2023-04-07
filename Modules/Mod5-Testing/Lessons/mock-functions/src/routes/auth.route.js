import express from "express";
import { createValidator } from "express-joi-validation";
import authController from "../controllers/auth.controller.js";
import { loginBody, registerBody } from "./../validations/auth.validation.js";

const validator = createValidator();
const authRouter = express.Router();

authRouter.post("/login", validator.body(loginBody), authController.login);
authRouter.post(
  "/register",
  validator.body(registerBody),
  authController.register
);

export default authRouter;
