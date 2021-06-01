function createPaymentObj(payload) {
  //  have to use ORM
  const paymentObj = {
    payment_reference_code: Math.random().toString(36).substring(2),
    user_plan_id: payload.user_plan_id,
  };
  return paymentObj;
}

function createMakePaymentTrxObj(payload, paymentId) {
  //  have to use ORM
  const paymentTrxObj = {
    payment_transaction_reference_code: Math.random().toString(36).substring(2),
    payment_id: paymentId,
    payment_mode: payload.payment_mode,
    amount: payload.amount,
    transaction_status: "SUCCESS",
    external_transaction_reference_id: payload.external_transaction_reference_id
  };
  return paymentTrxObj;
}

module.exports = {
  createPaymentObj,
  createMakePaymentTrxObj
};
