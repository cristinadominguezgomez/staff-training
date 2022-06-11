const Joi = require("@hapi/joi");

const newEmployeeSchema = Joi.object({
  email: Joi.string().email().min(6).max(150).required(),

  password: Joi.string().min(6).max(50).required(),

  name: Joi.string().min(2).max(100),
});

module.exports = newEmployeeSchema;
