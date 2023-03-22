import productService from "../services/product.service";
import productDetailService from "../services/productDetail.service";

class ProductController {
  async getAllProducts(req, res) {
    const { storeId, status } = req.query;
    const allProducts = await productService.getAllProducts(storeId, status);
    return res.status(200).json({
      data: allProducts,
    });
  }
  async getProductById(req, res) {
    const { productId } = req.params;
    const product = await productService.getProductById(+productId);
    product.productDetail = productDetailService.getProductDetailById(
      product.productDetailId
    );
    return res.status(200).json({
      data: product,
    });
  }
}

export default new ProductController();
