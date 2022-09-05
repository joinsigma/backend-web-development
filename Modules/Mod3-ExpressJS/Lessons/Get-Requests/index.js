import express, { json } from "express";
import { allCars } from "./mockData";

const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;

// Generic GET request
app.get("/heartbeat", async (req, res) => {
  res.json({
    name: "carsome-clone",
    version: "v1.0",
    timestamp: new Date().toISOString(),
  });
});

// GET Request with a Param
app.get("/car/:carId", async (req, res) => {
  const carId = req.params.carId;
  const foundCar = allCars.find((car) => car.id === +carId);
  if (!foundCar) {
    res.status(404);
    return;
  }
  res.json({
    data: foundCar,
  });
});

// GET Request with queryParams
app.get("/cars", async (req, res) => {
  const queryParams = req.query;
  res.json({
    message: `These are your query Params: ${JSON.stringify(queryParams)}`,
    data: allCars,
  });
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
