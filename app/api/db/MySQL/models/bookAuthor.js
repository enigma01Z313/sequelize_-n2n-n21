"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("bookAuthor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
