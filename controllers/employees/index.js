const activateEmpControllers = require("./activateEmp");

const registerEmpController = require("./registerEmp");

const getEmpByIdController = require("./getEmpById");

const getEmployeesController = require("./getEmpAll");

const loginEmp = require("./loginEmp");

const deleteEmpByIdController = require("./deleteEmpById");

module.exports = {
  activateEmpControllers,
  registerEmpController,
  loginEmp,
  getEmpByIdController,
  deleteEmpByIdController,
  getEmployeesController,
};
