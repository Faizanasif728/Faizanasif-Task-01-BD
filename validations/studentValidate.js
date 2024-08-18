const joi = require("joi");

module.exports = {
  createStudentSchema: async (req, res, next) => {
    const createstudent = joi.object({
      studentname: joi.string().min(3).max(30).required(),
      password: joi.string().min(6).max(18).required(),
    });

    try {
      const validate = await createstudent.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUserSchema: async (req, res, next) => {
    const username = joi.object({
      studentname: joi.string().min(3).max(30).required(),
    });

    try {
      const validate = await username.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
