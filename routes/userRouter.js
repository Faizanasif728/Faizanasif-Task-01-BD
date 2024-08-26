var routes = require("express").Router();
const protected = require("../middleware.js");
const {
  create_user,
  get_all_users,
  get_user,
  delete_user,
  update_users,
  getProfile,
} = require("../controllers/userController");
const {
  createUserSchema,
  getUserSchema,
  getAllUserSchema,
  updateUserSchema,
} = require("../validations/user");

//create User request
routes.post("/createUser", createUserSchema, create_user);

//get all User request
routes.get("/getAllUsers", protected, getAllUserSchema, get_all_users);

//get specific User request
routes.get("/getUser", getUserSchema, get_user);

//delete User request
routes.delete("/deleteUser", getUserSchema, delete_user);

//update User request
routes.patch("/updateUser", updateUserSchema, update_users);

//User profile request
routes.get("/getUserProfile", getProfile);
module.exports = routes;
