const getPool = require("../../database/getPool");

const selectEmpAll = async () => {
  const pool = getPool();

  const [employees] = await pool.query(
    "SELECT * FROM employees WHERE id not in (1)"
  );
  return employees;
};

module.exports = selectEmpAll;
