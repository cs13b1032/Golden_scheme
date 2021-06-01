"use strict";
const userService = require("../../services/users");

module.exports = {
  createUser: async (req, res) => {
    try {
      const {
        first_name: firstName,
        mobile: mobile,
        date_of_birth: dateOfBirth,
        title: title,
        door_number: doorNumber,
        street: street,
        area: area,
        state: state,
        city: city,
        pincode: pincode,
        plan_price: planPrice
      } = req.body;

      // have to put them in routes file rather than in controller for joi validation
      if (
        !(
          firstName &&
          mobile &&
          title &&
          doorNumber &&
          street &&
          area &&
          state &&
          city &&
          pincode &&
          planPrice
        )
      ) {
        res.status(400).send("one of body parameter is not provided");
      }
      const result = await userService.createUser(req.body);
      res.status(201).json(result);
    } catch (error) {
      res
        .status(400)
        .send(
          "Error in Create User: Service is not completly sophisticated yet"
        );
    }
  },
  getUser: async (req, res) => {
    try {
      console.log(req.userContext);
      const result = await userService.getUser(req.userContext.id);
      res.status(201).json(result);
    } catch (error) {
      res
        .status(400)
        .send("Error in Get User: Service is not completly sophisticated yet");
    }
  },
};
