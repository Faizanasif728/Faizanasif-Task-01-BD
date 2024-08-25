const { getRole } = require("../Models/commonModel");
const roles = require("../Models/definitions/roles");
const { createUser, getAllUsers, getUser } = require("../Models/userModel");
const responseHandler = require("../responseHandler");
module.exports = {
  createStudent: async (req, res) => {
    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      delete req.body.role;
      req.body.roleId = role.response.dataValues.roleId;
      // console.log(role.response.dataValues);
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllStudent: async (req, res) => {
    try {
      const users = await getAllUsers();
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteStudent: (req, res) => {
    try {
      const { studentname } = req.query;

      const indexOfArray = studentArray.findIndex(
        (std) => std.studentname === studentname
      );

      console.log(indexOfArray);

      if (indexOfArray !== -1) {
        studentArray.splice(indexOfArray, 1);
        return res.send({
          response: "student deleted successfully",
        });
      } else {
        return res.send({
          response: "not found",
        });
      }
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getStudentByName: (req, res) => {
    try {
      const { studentname } = req.query;
      studentArray.map((std) => {
        if (std.studentname === studentname) {
          return res.send({
            response: studentArray,
          });
        }
      });
      return res.send({
        response: "user does not exist",
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const users = await getUser(req.query);
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
