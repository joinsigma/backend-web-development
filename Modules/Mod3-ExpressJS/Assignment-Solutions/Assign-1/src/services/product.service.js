export const allProducts = [
  {
    id: 1,
    productDetailId: 2,
    storeId: 1,
    price: 29.99,
    quantity: 100,
    status: "Available",
    createdBy: 3,
    createdAt: "2022-01-05T09:15:00Z",
    updatedBy: null,
    updatedAt: null,
  },
  {
    id: 2,
    productDetailId: 1,
    storeId: 2,
    price: 49.99,
    quantity: 50,
    status: "Available",
    createdBy: 3,
    createdAt: "2022-02-10T12:30:00Z",
    updatedBy: null,
    updatedAt: null,
  },
  {
    id: 3,
    productDetailId: 3,
    storeId: 3,
    price: 79.99,
    quantity: 0,
    status: "Out of stock",
    createdBy: 3,
    createdAt: "2022-03-25T17:45:00Z",
    updatedBy: null,
    updatedAt: null,
  },
];

class ProductService {
  getAllProducts = async () => {
    return allProducts;
  };

  getProductById = (id) => {
    return allProducts.find((product) => product.id === id);
  };
}

export default new ProductService();
