const User = require("../models/user");
const bcrypt = require("bcryptjs");
const Boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");

const {
  checkValidation,
  createToken,
  isAutherized,
} = require("../utils/userFunctions");

exports.addUser = async (req, res) => {
  try {
    const username = req.payload.username;
    const email = req.payload.email;
    const role = req.payload.role;
    const password = req.payload.password;
    const isPresent = checkValidation(email);
    if (isPresent) {
      return response({ message: "user is already present" }).code(401);
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      role,
      password: hashedpassword,
    });
    const token = createToken(username, email, role);
    return res.response({
      message: "User is created Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return Boom.badImplementation("terrible implementation");
  }
};

exports.login = async (req, res) => {
  const email = req.payload.email;
  const password = req.payload.password;
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return response({ message: "user is not found" }).code(402);
  }
  const isEqual = await bcrypt.compare(password, user.password);
  console.log("isEqual ", isEqual);
  if (!isEqual) {
    return res
      .response({ message: "email or password is incorrect" })
      .code(401);
  }
  const token = createToken(user.username, email, user.role);
  return res.response({ message: "user is logged in", token }).code(200);
};
