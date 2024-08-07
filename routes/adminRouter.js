const {
  createAdmin,
  getAllAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const { createAdminSchema } = require("../validations/adminValidate");

var routes = require("express").Router();
routes.post("/createAdmin", createAdminSchema, createAdmin);
routes.get("/getAllAdmin", getAllAdmin);
routes.delete("/deleteAdmin", deleteAdmin);

module.exports = routes;
