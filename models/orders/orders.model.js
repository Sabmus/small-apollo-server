const orders = [
  {
    date: "2018-01-12",
    subtotal: 30.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old red shoe",
          price: 15.11,
        },
        quantity: 1,
      },
      {
        product: {
          id: "bluejeans",
          description: "Old blue jean",
          price: 15.11,
        },
        quantity: 1,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
