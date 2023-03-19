import productService from "../services/product.service";
import productDetailService from "../services/productDetail.service";

class ProductController {
  getAllProducts(req, res) {
    const { storeId, status } = req.query;
    const allProducts = productService.getAllProducts();

    allProducts.filter((product) => {
      if (!storeId && !status) return;
      if (storeId && product.storeId !== storeId) return;
      if (status && product.status !== status) return;
      return product;
    });

    for (const product of allProducts) {
      product.productDetail = productDetailService.getProductDetailById(
        product.productDetailId
      );
    }

    return res.status(200).json({
      data: allProducts,
    });
  }
  getProductById(req, res) {
    const { productId } = req.params;
    const product = productService.getProductById(+productId);
    product.productDetail = productDetailService.getProductDetailById(
      product.productDetailId
    );
    return res.status(200).json({
      data: product,
    });
  }
}

export default new ProductController();
