const sequelize = require("../bin/DB_Connection");
const users = require("./definitions/users");
const roles = require("./definitions/roles");
const sessions = require("./definitions/sessions");

const models = { users, roles };

roles.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(roles, { foreignKey: "roleId" });

users.hasOne(sessions, { foreignKey: "userId" });
sessions.belongsTo(users, { foreignKey: "userId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
