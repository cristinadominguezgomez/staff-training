const Joi = require("joi");

const uploadExerciseSchema = Joi.object({
  title: Joi.string().min(4).max(50),
  description: Joi.string().min(4).max(200),
  type: Joi.string().min(4).max(50),
  muscle_group: Joi.string().min(4).max(50),
  image: Joi.any(),
});

module.exports = uploadExerciseSchema;
