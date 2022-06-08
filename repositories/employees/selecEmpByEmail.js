const getPool = require("../../database/getPool");

const selectEmpByEmail = async (email) => {
  const pool = getPool();

  const [[employee]] = await pool.query(
    "SELECT * FROM employees WHERE email = ?",
    [email]
  );

  return employee;
};

module.exports = selectEmpByEmail;
