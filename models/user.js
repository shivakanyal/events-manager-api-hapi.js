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
      type: DataTypes.DATE,
      defaultValue: "user",
    },
  },
  {
    timestamps: false,
  }
);

User.sync()
  .then((res) =>
    console.log("The table for the User model was just (re)created!")
  )
  .catch((err) => console.log(err));

module.exports = User;
