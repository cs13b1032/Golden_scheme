function createUserPlanObj(payload) {
  var d = new Date();
  console.log(payload.monthPeriod)
  d.setMonth(d.getMonth() + payload.monthPeriod);
  console.log(d.toISOString())
  const userPlanObj = {
    user_id: payload.user_id,
    plan_id: payload.plan_id,
    plan_price: payload.plan_price,
    start_time: new Date().toISOString(),
    end_time: d.toISOString(),
  };
  return userPlanObj;
}

module.exports = {
  createUserPlanObj,
};
