const selectEmpAll = require("../../repositories/employees/selectEmpAll");

const getEmployeesAll = async (req, res, next) => {
  try {
    const employees = await selectEmpAll();

    res.status(200).send({ status: "ok", data: employees });
  } catch (error) {
    next(error);
  }
};

module.exports = getEmployeesAll;
