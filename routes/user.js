const User = require("../controllers/user");

module.exports = [
  {
    method: "POST",
    path: "/api/users",
    handler: User.addUser,
  },
  {
    method: "POST",
    path: "/api/users/login",
    handler: User.login,
  },
];
