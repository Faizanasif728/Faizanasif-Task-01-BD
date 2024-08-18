const {
  createStudent,
  getAllStudent,
  deleteStudent,
  getUserbyname,
} = require("../controllers/studentController");
const {
  createStudentSchema,
  getUserSchema,
} = require("../validations/studentValidate");

var routes = require("express").Router();
routes.post("/createStudent", createStudentSchema, createStudent);
routes.get("/getAllStudent", getAllStudent);
routes.delete("/deleteStudent", deleteStudent);
routes.get("/getbyusername", getUserSchema, getUserbyname);

module.exports = routes;
