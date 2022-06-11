const Joi = require("@hapi/joi");

const uploadExerciseSchema = Joi.object({
  title: Joi.string().min(4).max(50),
  description: Joi.string().min(4).max(200),
  type: Joi.string().min(4).max(50),
  muscle_group: Joi.string().min(4).max(50),
});

module.exports = uploadExerciseSchema;
