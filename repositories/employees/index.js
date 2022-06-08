const insertEmp = require("./insertEmp");
const selectEmpById = require("./selectEmpById");
const selectEmpAll = require("./selectEmpAll");
const removeEmpById = require("./removeEmpById");
const selectEmpByActivationCode = require("./selectEmpByActivationCode");
const deleteRegistrationCode = require("./deleteRegistrationCode");
const selectEmpByEmail = require("./selecEmpByEmail");

module.exports = {
  insertEmp,
  selectEmpById,
  selectEmpAll,
  removeEmpById,
  selectEmpByActivationCode,
  deleteRegistrationCode,
  selectEmpByEmail,
};
