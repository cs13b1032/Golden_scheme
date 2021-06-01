"use strict";

const config = require("@config/config");
const db = config.getDb();

const { createUserObj } = require("./helper");

const goldenHarvestService = require("../golden_harvest");
const paymentService = require("../payments");
const { getUserDetails, createUser } = require("./db");

const _this = (module.exports = {
  createUser: async (payload) => {
    try {
      const userObj = createUserObj(payload);
      var userDetails;
      await db.transaction(async (trx) => {
        userDetails = await createUser(trx, userObj);
        const userPlanDetails = await goldenHarvestService.createUserPlan(trx, {
          user_id: userDetails[0],
          plan_id: 1000000, // currently fixed,
          plan_price: payload.plan_price,
          monthPeriod: 10, // currently fixed
        });
        await paymentService.createPayment(trx, {
          user_plan_id: userPlanDetails[0],
        });
      });

      return userDetails;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getUser: async (userId) => {
    try {
      console.log(userId);
      const userDetails = await getUserDetails(userId);
      return userDetails;
    } catch (error) {
      throw error;
    }
  },
});
