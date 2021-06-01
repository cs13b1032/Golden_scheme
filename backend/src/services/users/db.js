const config = require("@config/config");
const db = config.getDb();

async function getUserDetails(userId) {
  return db.select("*").from("user_management.users").where("id", userId);
}

async function createUser(trx, userObj) {
  return db("user_management.users")
    .transacting(trx)
    .insert(userObj)
    .returning("id");
}

module.exports = {
  getUserDetails,
  createUser
};
