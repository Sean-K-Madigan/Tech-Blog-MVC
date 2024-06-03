const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Error extends Model {}

// Create the error model containing id, error_name, error_message, error_stack, user_id, route, method, and user_agent fields
Error.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    error_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    error_message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    error_stack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_agent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'error',
  }
);

module.exports = Error;