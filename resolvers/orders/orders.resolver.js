const ordersModel = require("../../models/orders/orders.model");

module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};
