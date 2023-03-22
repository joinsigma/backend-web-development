class ProductDetailService {
  db = getConnection();
  ProductDetail = this.db.productDetail;

  getProductDetailById = (id) => {
    return this.ProductDetail.findByPk(id);
  };
}

export default new ProductDetailService();
