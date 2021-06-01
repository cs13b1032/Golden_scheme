"use strict";

const paymentController = require("../controllers/payment_controller");

module.exports = {
  makePayment: {
    method: "post",
    path: "/payment",
    function: paymentController.makePayment,
  }
};
