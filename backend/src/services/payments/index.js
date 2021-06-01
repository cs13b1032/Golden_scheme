"use strict";

const { createPaymentObj, createMakePaymentTrxObj } = require("./helper");

const {
  insertPayment,
  insertPaymentTransaction,
  updatePayment,
  getpaymentId,
} = require("./db");

const config = require("@config/config");
const db = config.getDb();

const _this = (module.exports = {
  createPayment: async (trx, payload) => {
    try {
      const paymentObj = createPaymentObj(payload);
      console.log(paymentObj);
      return insertPayment(trx, paymentObj);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  makePayment: async (payload) => {
    try {
      console.log(payload);
      const paymentDetails = await getpaymentId(payload.user_plan_id);
      console.log(paymentDetails);
      const paymentObj = createMakePaymentTrxObj(
        payload,
        paymentDetails.id
      );
      await db.transaction(async (trx) => {
        await insertPaymentTransaction(trx, paymentObj);
        await updatePayment(trx, payload.amount, paymentDetails.id);
      });
      return { ok: true };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});
