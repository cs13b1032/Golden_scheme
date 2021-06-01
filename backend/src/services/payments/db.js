"use strict";

const config = require("@config/config");
const db = config.getDb();

function insertPayment(trx, paymentObj) {
  return db("golden_harvest.payments")
    .transacting(trx)
    .insert(paymentObj)
    .returning("id");
}

function insertPaymentTransaction(trx, paymentTransactionObj) {
  return db("golden_harvest.payment_transactions")
    .transacting(trx)
    .insert(paymentTransactionObj)
    .returning("id");
}
function updatePayment(trx, amount, paymentId) {
  return db("golden_harvest.payments")
    .transacting(trx)
    .where(`id`, paymentId)
    .increment("paid_amount", amount);
}

function getpaymentId(userPlanId) {
  return db("golden_harvest.payments")
    .select("*")
    .where(`user_plan_id`, userPlanId)
    .first()
}
module.exports = {
  insertPayment,
  insertPaymentTransaction,
  updatePayment,
  getpaymentId,
};
