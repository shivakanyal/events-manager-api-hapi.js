const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  performers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "userId",
    },
  },
});

Event.sync()
  .then((res) =>
    console.log("The table for the User model was just (re)created!")
  )
  .catch((err) => console.log(err));

module.exports = Event;
