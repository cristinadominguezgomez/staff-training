const Joi = require("joi");

const newExerciseSchema = Joi.object({
  title: Joi.string().min(4).max(50).required(),
  description: Joi.string().min(4).max(200).required(),
  type: Joi.string().min(4).max(50),
  muscle_group: Joi.string().min(4).max(50),
});

module.exports = newExerciseSchema;
