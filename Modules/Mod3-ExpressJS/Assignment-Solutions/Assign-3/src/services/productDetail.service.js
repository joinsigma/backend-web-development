const allProductDetails = [
  {
    id: 1,
    name: "Sweatshirt",
    description: "A comfortable and cozy sweatshirt",
    variant: "Blue",
    createdBy: 3,
    createdAt: "2022-01-01T10:30:00Z",
    updatedBy: null,
    updatedAt: null,
  },
  {
    id: 2,
    name: "T-shirt",
    description: "A simple and stylish t-shirt",
    variant: "Black",
    createdBy: 3,
    createdAt: "2022-02-15T14:45:00Z",
    updatedBy: null,
    updatedAt: null,
  },
  {
    id: 3,
    name: "Jeans",
    description: "A classic pair of jeans",
    variant: "Dark Blue",
    createdBy: 3,
    createdAt: "2022-03-20T16:00:00Z",
    updatedBy: null,
    updatedAt: null,
  },
];

class ProductDetailService {
  getProductDetailById = (id) => {
    return allProductDetails.find((pDetail) => pDetail.id === id);
  };
}

export default new ProductDetailService();