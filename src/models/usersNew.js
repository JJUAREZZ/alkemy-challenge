const { DataTypes } = require("sequelize");
//const { defaultValueSchemable } = require('sequelize/types/utils');
const sequelize = require("../loaders/sequelize");

const User = sequelize.define(
  "Users",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // allowNull defaults to true
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      // allowNull defaults to true
    },
  },
  {}
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;
