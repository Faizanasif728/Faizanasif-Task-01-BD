const {
  createStudent,
  getAllStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { createStudentSchema } = require("../validations/studentValidate");

var routes = require("express").Router();
routes.post("/createStudent", createStudentSchema, createStudent);
routes.get("/getAllStudent", getAllStudent);
routes.delete("/deleteStudent", deleteStudent);

module.exports = routes;
