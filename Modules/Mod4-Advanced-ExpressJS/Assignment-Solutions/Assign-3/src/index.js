import express from "express";
import authRouter from "./routes/auth.route.js";
import healthRouter from "./routes/heath.route.js";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

const PORT = 8000;

app.use(errorMiddleware);

app.use("", healthRouter);
app.use("", authRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(PORT, async () => {
  console.log("Shop App running at port", PORT);
});
