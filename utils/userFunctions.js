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
  let tokenn = jwt.verify(token, "secretKey");
  if (tokenn) {
    return true;
  } else {
    return false;
  }
};

const createToken = (name, email, role) => {
  let token = jwt.sign({ name, email, role }, "secretKey", {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { checkValidation, createToken, isAutherized };
