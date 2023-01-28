const products = [
  {
    id: "redshoe",
    description: "A red shoe",
    price: 36.99,
    reviews: [],
  },
  {
    id: "bluejeans",
    description: "A blue jean",
    price: 45.99,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (!product) {
    return null;
  }

  const review = {
    rating,
    comment,
  };

  product.reviews.push(review);
  return product;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
