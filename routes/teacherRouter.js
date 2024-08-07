const {
  createTeacher,
  getAllTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");
const { createTeacherSchema } = require("../validations/teacherValidate");

var routes = require("express").Router();
routes.post("/createTeacher", createTeacherSchema, createTeacher);
routes.get("/getAllTeacher", getAllTeacher);
routes.delete("/deleteTeacher", deleteTeacher);

module.exports = routes;
