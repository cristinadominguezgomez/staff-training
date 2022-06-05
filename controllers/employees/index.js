const activateEmpControllers = require("./activateEmp");

const registerEmpController = require("./registerEmp");

const getEmpByIdController = require("./getEmpById");

const getEmployeesController = require("./getEmpAll")

const loginEmpControllers = require("./loginEmp");

const deleteEmpByIdController = require("./deleteEmpById");

module.exports = {
  activateEmpControllers,
  registerEmpController,
  loginEmpControllers,
  getEmpByIdController,
  deleteEmpByIdController,
  getEmployeesController,
};
