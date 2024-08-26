require("dotenv").config();
const { response } = require("express");
const { getUser } = require("../Models/userModel");
const responseHandler = require("../responseHandler");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    try {
      const isUser = await getUser(req.body);
      if (isUser.error || !isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid user")
          : (isUser.response = "Invalid user");
        res.cookie("auth", "undefined");
        return responseHandler(isUser, res);
      }

      const { password } = isUser.response.dataValues;
      const isValid = await compare(req.body.password, password);
      if (!isValid) {
        res.cookie("auth", "undefined");
        return responseHandler({ response: "invalid credentials" }, res);
      }
      const user = isUser.response.dataValues;
      delete user.password;
      const token = sign(user, process.env.SECRET);
      res.cookie("auth", token);
      return responseHandler({ response: token }, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
