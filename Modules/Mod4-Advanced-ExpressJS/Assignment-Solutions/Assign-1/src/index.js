import express from "express";
import healthRouter from "./routes/heath.route.js";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

const PORT = 8000;

app.use("", healthRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(PORT, async () => {
  console.log("Shop App running at port", PORT);
});
