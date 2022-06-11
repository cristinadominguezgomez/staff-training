const Joi = require("@hapi/joi");

const idEmployeeSchema = Joi.number().positive().integer();

module.exports = idEmployeeSchema;
