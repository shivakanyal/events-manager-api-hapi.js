const user = require("../models/event");
const bcrypt = require("bcryptjs");
const { Boom } = require("@hapi/boom");

exports.addUser = async (req, res) => {
  try {
    const username = req.payload.username;
    const email = req.payload.email;
    const role = req.payload.role;
    const password = req.payload.password;

    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await user.create({
      username,
      email,
      role,
      password: hashedpassword,
    });
    return res.response({ message: "User is created Successfully", user });
  } catch (error) {
    return Boom.badImplementation("terrible implementation");
  }
};
