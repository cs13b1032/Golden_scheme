"use strict";

const { createUserPlanObj } = require("./helper");

const { insertUserPlan } = require("./db");

const _this = (module.exports = {
  createUserPlan: async (trx, payload) => {
    try {
      const userPlanObj = createUserPlanObj(payload);
      console.log(userPlanObj)
      const res =  await insertUserPlan(trx, userPlanObj);
      console.log(res)
      return res
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
});
