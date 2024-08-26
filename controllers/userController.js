const { getRole } = require("../Models/commonModel");
const roles = require("../Models/definitions/roles");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../Models/userModel");
const responseHandler = require("../responseHandler");
module.exports = {
  create_user: async (req, res) => {
    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      delete req.body.role;
      req.body.roleId = role.response.dataValues.roleId;
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  get_all_users: async (req, res) => {
    try {
      req.query.offset = (req.query.pageNo - 1) * req.query.limit;
      const users = await getAllUsers(req.query);
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  get_user: async (req, res) => {
    try {
      const user = await getUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  delete_user: async (req, res) => {
    try {
      const user = await deleteUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
