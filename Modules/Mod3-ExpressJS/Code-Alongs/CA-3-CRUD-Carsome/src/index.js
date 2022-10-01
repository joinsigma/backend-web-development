import dotenv from "dotenv";
import express from "express";
import _ from "lodash";
import healthRouter from "./routes/heath.route.js";
import carRouter from "./routes/car.route.js";
import { startDbConnection } from "./models/index.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = 8000;

app.use("", healthRouter);
app.use("/cars", carRouter);

app.listen(PORT, async () => {
  try {
    const db = startDbConnection(
      process.env.DB_HOST,
      process.env.DB_USER,
      process.env.DB_PASS
    );
    if (!_.isEmpty(db)) {
      await db.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log("Carsome-clone running at port", PORT);
});
