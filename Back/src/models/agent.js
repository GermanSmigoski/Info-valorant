// models/Agent.js

const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("agent", {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    agentImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    agentBanner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
