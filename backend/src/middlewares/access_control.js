"use strict";

const config = require("@config/config");
const db = config.getDb();

module.exports = async function (req, res, next) {
  try {

    const reqUrl = req.originalUrl.split('?')[0];

    if(reqUrl != '/create-user'){
      const mobile = req.get(config.getConfig('HEADER.X_USER_PHONE'))
      const password_hash = req.get(config.getConfig('HEADER.X_USER_PASSWORD_HASH'))
      const userDetails = await db("user_management.users")
      .select("*")
      .where(`mobile`, mobile)
      .where(`password_hash`, password_hash)
      .first()

      req.userContext = userDetails;
    }

  } catch (err) {
    return false;
  }

  next();
};
