function createUserObj(payload) {
  const userObj = {
    first_name: payload.first_name,
    last_name: payload.last_name,
    email: payload.email,
    mobile: payload.mobile,
    date_of_birth: payload.date_of_birth,
    address: {
      door_number: payload.door_number,
      street: payload.street,
      area: payload.area,
      state: payload.state,
      city: payload.city,
      pincode: payload.pincode,
    },
    password_hash: payload.password
  };
  return userObj;
}

module.exports = {
  createUserObj,
};
