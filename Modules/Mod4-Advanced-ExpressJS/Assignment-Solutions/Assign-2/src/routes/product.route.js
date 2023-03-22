import express from "express";
import productController from "../controllers/product.controller";

const productRouter = express.Router();

carRouter.get("", productController.getAllProducts);
carRouter.get("/:productId", productController.getProductById);

export default productRouter;
