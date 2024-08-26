const joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = joi.object({
      role: joi.valid("Admin", "Instructor", "Trainee").required(),
      firstName: joi.string().min(3).max(30).required(),
      lastName: joi.string().min(3).max(30).required(),
      email: joi.string().email().required(),
      mobile: joi.string().required().length(13),
      username: joi.string().min(3).max(30).required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    try {
      const validate = await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUserSchema: async (req, res, next) => {
    const username = joi.object({
      username: joi.string().min(3).max(30),
      userId: joi.string(),
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
  getAllUserSchema: async (req, res, next) => {
    const getAllUser = joi.object({
      pageNo: joi.number().required(),
      limit: joi.number().valid(3, 6).required(),
      orderWith: joi
        .string()
        .valid("firstName", "lastName", "email", "username", "mobile"),
      orderBy: joi.string().valid("ASC", "DESC"),
      firstName: joi.string(),
      lastName: joi.string(),
      email: joi.string().email(),
      mobile: joi.string(),
      username: joi.string(),
      role: joi.string().valid("Admin", "Instructor", "Trainee"),
    });

    try {
      const validate = await getAllUser.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateUserSchema: async (req, res, next) => {
    const updateUser = joi.object({
      userId: joi.string().required(),
      firstName: joi.string(),
      lastName: joi.string(),
      email: joi.string().email(),
      mobile: joi.string(),
      username: joi.string(),
    });

    try {
      const validate = await updateUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
