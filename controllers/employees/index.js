const activateEmpControllers = require("./activateEmp");

const registerEmployees = require("./registerEmployees");

const getEmployeeById = require("./getEmployeeById");

const getEmployeesAll = require("./getEmployeesAll");

const loginEmployees = require("./loginEmployees");

const deleteEmpById = require("./deleteEmpById");

module.exports = {
  activateEmpControllers,
  registerEmployees,
  loginEmployees,
  getEmployeeById,
  deleteEmpById,
  getEmployeesAll,
};
