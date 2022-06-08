const getPool = require("../../database/getPool");

const selectEmpByActivationCode = async (registrationCode) => {
  const pool = getPool();

  const [[employee]] = await pool.query(
    "SELECT * FROM employees WHERE registrationCode = ?",
    [registrationCode]
  );

  return employee;
};

module.exports = selectEmpByActivationCode;
