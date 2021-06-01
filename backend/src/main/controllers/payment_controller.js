"use strict";
const paymentsService = require("../../services/payments");

module.exports = {
  makePayment: async (req, res) => {
    try {
      console.log('!!!!!!!!!')
      const {
        user_plan_id: userPlanId,
        amount: amount,
        payment_mode: paymentMode,
        external_transaction_reference_id: externalTransactionReferenceid,
      } = req.body;

      if (
        !(userPlanId && amount && paymentMode && externalTransactionReferenceid)
      ) {
        res
          .status(400)
          .send(
            "one of the required parameter is not provided in request body"
          );
      } else {
        console.log(req.userContext, req.body)
        const result = await paymentsService.makePayment(req.body, req.userContext);
        res.status(201).json(result);
      }
    } catch (error) {
      res
        .status(400)
        .send("Error in the API : Service is not completly sophisticated yet");
    }
  },
};
