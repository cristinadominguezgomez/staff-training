const newEmployeesController = require("./activateEmp");

const getEmployeesController = require("./registerEmp");

const loginEmployees = require("./loginEmp");

const deleteEmployees = require("./deleteEmp");

module.exports = {
  newEmployeesController,
  getEmployeesController,
  loginEmployees,
  deleteEmployees,
};
