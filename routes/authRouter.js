var routes = require("express").Router();
const { login } = require("../controllers/authController");
const { getLoginSchema } = require("../validations/user");

//create User request
routes.post("/loginUser", getLoginSchema, login);

module.exports = routes;
