const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// User.sync()
//   .then((res) =>
//     console.log("The table for the User model was just (re)created!")
//   )
//   .catch((err) => console.log(err));

module.exports = User;
