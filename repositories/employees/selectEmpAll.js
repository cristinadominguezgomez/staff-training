const getPool = require("../../database/getPool");

const selectEmpAll = async () => {
  const pool = getPool();

  const [employees] = await pool.query("SELECT * FROM employees");

  return employees;
};

module.exports = selectEmpAll;
