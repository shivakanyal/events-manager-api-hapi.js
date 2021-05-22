const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const checkValidation = async (email, password) => {
  const user = await User.findOne({ where: { emial: email } });
  if (user) {
    return false;
  }
  const isEqaul = await bcrypt.compare(password, user.password);

  if (!isEqaul) {
    return false;
  }
  return true;
};

const isAutherized = (token) => {
  const token = jwt.verify(token, "secretKey");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const createToken = async (name, email, role) => {
  const token = await jwt.sign({ name, email, role }, "secretKey", {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { checkValidation, createToken, isAutherized };
