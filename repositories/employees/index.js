const insertEmp = require("./insertEmp");
const selectEmpById = require("./selectEmpById");
const selectEmpAll = require("./selectEmpAll")
const removeEmpById = require("./removeEmpById")
const selectUserByActivationCode = require("./selectEmpActivationCode");

module.exports = {
  insertEmp,
  selectEmpById,
  selectEmpAll,
  removeEmpById, 
  selectUserByActivationCode,
};

