const {
  createStudent,
  getAllStudent,
  deleteStudent,
  getStudentByName,
  getUser,
} = require("../controllers/studentController");
const {
  createStudentSchema,
  getUserSchema,
} = require("../validations/studentValidate");

var routes = require("express").Router();
routes.post("/createStudent", createStudentSchema, createStudent);
routes.get("/getAllStudent", getAllStudent);
routes.delete("/deleteStudent", deleteStudent);
routes.get("/getStudentByName", getUserSchema, getStudentByName);

routes.get("/getStudent", getUserSchema, getUser);

module.exports = routes;
