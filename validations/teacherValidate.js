const joi = require("joi");

module.exports = {
  createTeacherSchema: async (req, res, next) => {
    const createteacher = joi.object({
      teachername: joi.string().min(3).max(30).required(),
      password: joi.string().min(6).max(18).required(),
    });

    try {
      const validate = await createteacher.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
