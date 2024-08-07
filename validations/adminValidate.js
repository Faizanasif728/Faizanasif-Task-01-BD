const joi = require("joi");

module.exports = {
  createAdminSchema: async (req, res, next) => {
    const createadmin = joi.object({
      adminname: joi.string().min(3).max(30).required(),
      password: joi.string().min(6).max(18).required(),
    });

    try {
      const validate = await createadmin.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
