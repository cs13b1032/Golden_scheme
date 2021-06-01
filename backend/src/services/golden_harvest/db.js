"use strict";

const config = require("@config/config");
const db = config.getDb();

function insertUserPlan(trx, userPlanObj) {
  return db("golden_harvest.user_plans").transacting(trx).insert(userPlanObj).returning("id");
}

module.exports = {
  insertUserPlan,
};
