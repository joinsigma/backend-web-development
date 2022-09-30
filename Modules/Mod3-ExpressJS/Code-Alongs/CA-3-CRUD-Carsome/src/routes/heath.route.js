import express from "express";
import healthController from "../controllers/health.controller.js";

const healthRouter = express.Router();

healthRouter.get("/health-check", healthController.getHealthCheck);

export default healthRouter;
