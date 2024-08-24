const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DB_Connection");
const roles = require("./roles");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

class users extends Model {}
users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    studentname: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      references: {
        model: roles,
        key: "roleId",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.password = await hash(user.password, 10);
});

users.afterCreate(async (user) => {
  console.log("user", user);
  delete user.dataValues.password;
});

module.exports = users;
