const activateEmpControllers = require("./activateEmp");

const getEmpByIdController = require("./getEmpById");

const registerEmpController = require("./registerEmp");

const loginEmpControllers = require("./loginEmp");

const deleteEmployees = require("./deleteEmp");

module.exports = {
  activateEmpControllers,
  registerEmpController,
  loginEmpControllers,
  getEmpByIdController,
  deleteEmployees,
};
