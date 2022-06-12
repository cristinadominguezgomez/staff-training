const Joi = require("joi");

const idEmployeeSchema = Joi.number().positive().integer();

module.exports = idEmployeeSchema;
