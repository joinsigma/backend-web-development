import { getConnection } from "../models/index.js";
const db = getConnection();
const Product = db.product;

class ProductService {
  getAllProducts = async (storeId, status) => {
    let allProducts = [];
    if (storeId && status) {
      allProducts = await Product.findAll({
        where: {
          storeId: storeId,
          status: {
            [Op.like]: status,
          },
        },
      });
    } else if (storeId) {
      allProducts = await Product.findAll({
        where: {
          storeId: storeId,
        },
      });
    } else if (status) {
      allProducts = await Product.findAll({
        where: {
          status: {
            [Op.like]: status,
          },
        },
      });
    } else {
      allProducts = await Product.findAll();
    }
    return allProducts;
  };

  getProductById = async (id) => {
    const product = await Product.findByPk(id);
    return product;
  };
}

export default new ProductService();
