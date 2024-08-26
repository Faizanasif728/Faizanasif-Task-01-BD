const {
  create_user,
  get_all_users,
  get_user,
  delete_user,
} = require("../controllers/userController");
const {
  createUserSchema,
  getUserSchema,
  getAllUserSchema,
} = require("../validations/user");

var routes = require("express").Router();

routes.post("/createUser", createUserSchema, create_user);

routes.get("/getAllUsers", getAllUserSchema, get_all_users);

routes.get("/getUser", getUserSchema, get_user);

routes.delete("/deleteUser", getUserSchema, delete_user);

module.exports = routes;
