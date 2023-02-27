import express from "express";
import healthRouter from "./routes/heath.route.js";
import carRouter from "./routes/car.route.js";

const app = express();

const PORT = 8000;

app.use("", healthRouter);
app.use("/cars", carRouter);

app.listen(PORT, async () => {
  console.log("Carsome-clone running at port", PORT);
});
