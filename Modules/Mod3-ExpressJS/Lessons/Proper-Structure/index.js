import express, { json } from "express";
// Import dotenv to recognize environment file
import dotenv from "dotenv";
import healthRoute from "./src/routes/health.route.js";
import carRoute from "./src/routes/v1/car.route.js";
// Loads `.env` file contents into process.env
dotenv.config();

const app = express();
// Adds ability to parse json in the request body
app.use(json());
// Get port from .env file or set to default 3000
const PORT = process.env.PORT || 3000;

// Set up routes
// first param is the prefix for all the healthRoute's endpoints
app.use("/", healthRoute);
app.use("/cars", carRoute);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
