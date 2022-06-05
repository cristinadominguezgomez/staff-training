const activateEmpControllers = require("./activateEmp");

const registerEmpController = require("./registerEmp");

const getEmpByIdController = require("./getEmpById");

const getEmployeesController = require("./getEmpAll")

const loginEmpControllers = require("./loginEmp");

const deleteEmployees = require("./deleteEmp");

module.exports = {
  activateEmpControllers,
  registerEmpController,
  loginEmpControllers,
  getEmpByIdController,
  deleteEmployees,
  getEmployeesController,
};
