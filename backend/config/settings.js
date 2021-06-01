'use strict';

module.exports = {

  APP_SETTINGS: {
    PORT: 4444,
    MAX_CONNECTIONS: 500
  },
  APP_ACCESS_CONTROL_ALLOW_ORIGIN_REGEX: `localhost:(4444))$`,

  HEADER: {
    X_USER_PHONE : 'X_User_Phone',
    X_USER_PASSWORD_HASH: 'X_User_password_hash'
  }
};
