const user = require("../models/event");
const bcrypt = require("bcryptjs");
const { Boom } = require("@hapi/boom");
const { checkValidation,createToken,isAutherized } = require("../utils/userFunctions");
const c

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
    const token = createToken(name,email,role);
    return res.response({ message: "User is created Successfully", user ,token});
  } catch (error) {
    return Boom.badImplementation("terrible implementation");
  }
};

exports.login = (req,res) =>{
    const email = req.payload.email;
    const password = req.payload.password;
    const isValidate = checkValidation(email,password);
    if(!isValidate){
        return Boom.unauthorized(null, 'Custom');
    }
    const token = createToken(name,email,role);
     
}