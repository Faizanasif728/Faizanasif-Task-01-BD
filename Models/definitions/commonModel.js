const { models } = require("../index");
module.exports = {
  getRole: async (role) => {
    try {
      const role = await models.roles.findOne({
        where: {
          role: role,
        },
      });
      return {
        response: role,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
};
