const Joi = require("@hapi/joi");

const idExerciseSchema = Joi.number().positive().integer();

module.exports = idExerciseSchema;
