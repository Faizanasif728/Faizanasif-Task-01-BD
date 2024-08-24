const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/DB_Connection");

class roles extends Model {}
roles.init(
  {
    roleId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["Admin", "Instructor", "Trainee"],
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "roles",
    sequelize,
  }
);

module.exports = roles;
