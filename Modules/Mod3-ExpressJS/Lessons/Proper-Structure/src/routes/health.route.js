import healthController from "../controllers/health.controller.js";
import express from "express";
const router = express.Router();

router.route("/health-check").get(healthController.getHealthData);

export default router;
