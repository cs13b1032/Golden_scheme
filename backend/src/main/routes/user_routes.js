"use strict";

const userController = require("../controllers/users_controller");

module.exports = {
  createUser: {
    method: "post",
    path: "/create-user",
    function: userController.createUser,
  },
  getUser: {
    method: "get",
    path: "/user",
    function: userController.getUser,
  },
};
