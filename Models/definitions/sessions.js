const { Model, DataTypes } = require("sequelize");
const users = require("./users");
const sequelize = require("../../bin/DB_Connection");

class sessions extends Model {}
sessions.init(
  {
    sessionId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(),
      unique: true,
      allowNull: false,
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
    modelName: "sessions",
    sequelize,
  }
);

module.exports = sessions;
