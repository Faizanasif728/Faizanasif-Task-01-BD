// import user from index or definitions/users

const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.users.findAll({
        // attributes: ["userId", "username"],
        attributes: {
          exclude: ["password", "roleId"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["roleId", "role"],
          },
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
  getUser: async (userId, studentname) => {
    try {
      const users = await models.users.findOne({
        // attributes: ["userId", "username"],
        where: {
          ...(userId ? { userId: userId } : { studentname: studentname }),
        },
        attributes: {
          exclude: ["password", "roleId"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["roleId", "role"],
          },
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
};
