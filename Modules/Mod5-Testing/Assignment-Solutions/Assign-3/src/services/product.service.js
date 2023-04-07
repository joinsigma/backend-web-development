import { getConnection } from "../models/index.js";

class ProductService {
  db = getConnection();
  Product = this.db.product;

  getAllProducts = async (storeId, status) => {
    let allProducts = [];
    if (storeId && status) {
      allProducts = await this.Product.findAll({
        where: {
          storeId: storeId,
          status: {
            [Op.like]: status,
          },
        },
      });
    } else if (storeId) {
      allProducts = await this.Product.findAll({
        where: {
          storeId: storeId,
        },
      });
    } else if (status) {
      allProducts = await this.Product.findAll({
        where: {
          status: {
            [Op.like]: status,
          },
        },
      });
    } else {
      allProducts = await this.Product.findAll();
    }
    return allProducts;
  };

  getProductById = async (id) => {
    const product = await this.Product.findByPk(id);
    return product;
  };
}

export default new ProductService();
