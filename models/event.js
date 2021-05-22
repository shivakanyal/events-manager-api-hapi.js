const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const User = require("../models/user");

const Event = sequelize.define(
  "Event",
  {
    eventId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
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
  },
  { freezeTableName: true }
);
Event.belongsTo(User, { foreignKey: "userId" });
// Event.sync()
//   .then((res) =>
//     console.log("The table for the Event model was just (re)created!")
//   )
//   .catch((err) => console.log(err));

module.exports = Event;
