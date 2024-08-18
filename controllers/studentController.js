const { createUser, getAllUsers } = require("../Models/userModel");

// const studentArray = [{ studentname: "username1", password: "000001" }];
module.exports = {
  createStudent: async (req, res) => {
    try {
      const user = await createUser(req.body);

      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
      // console.log(req.body);
      // const { studentname, password } = req.body;
      // let isExist = false;
      // studentArray.map((std) => {
      //   if (std.studentname === studentname) {
      //     isExist = true;
      //   }
      // });
      // if (!isExist) {
      //   studentArray.push({ studentname, password });
      //   return res.send({
      //     response: "student created successfully",
      //   });
      // } else {
      //   return res.send({
      //     response: "already Exist",
      //   });
      // }
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllStudent: async (req, res) => {
    try {
      const users = await getAllUsers();
      if (users.error) {
        return res.send({ error: users.error });
      }
      return res.send({
        response: users,
      });
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
  getUserbyname: (req, res) => {
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
};
