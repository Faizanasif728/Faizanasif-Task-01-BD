const { models } = require("./index");
const { Op } = require("sequelize");
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
  getAllUsers: async (query) => {
    try {
      const users = await models.users.findAll({
        where: {
          ...(query.firstName
            ? { firstName: { [Op.startsWith]: query.firstName } }
            : true),
          ...(query.lastName
            ? { lastName: { [Op.startsWith]: query.lastName } }
            : true),
          ...(query.mobile
            ? { mobile: { [Op.startsWith]: query.mobile } }
            : true),
          ...(query.email ? { email: { [Op.startsWith]: query.email } } : true),
          ...(query.username
            ? { username: { [Op.startsWith]: query.username } }
            : true),
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
        order: [
          [
            query.orderWith ? query.orderWith : "firstName",
            query.orderBy ? query.orderBy : "ASC",
          ],
        ],
        offset: query.offset,
        limit: query.limit,
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
  getUser: async ({ userId, username }) => {
    try {
      const users = await models.users.findOne({
        // attributes: ["userId", "username"],
        where: {
          ...(userId ? { userId: userId } : { username: username }),
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

  deleteUser: async ({ userId, username }) => {
    try {
      const user = await models.users.destroy({
        // attributes: ["userId", "username"],
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
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
  updateUser: async ({ userId, ...body }) => {
    try {
      const user = await models.users.update(
        {
          where: {
            userId: userId,
          },
        },
        { ...body }
      );
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
};
