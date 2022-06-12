const getPool = require("../../database/getPool");

const selectEmpById = async (id) => {
  const pool = getPool();

  const [[employee]] = await pool.query(
    "SELECT id, name, avatar, role, email, registrationCode, created_at FROM employees WHERE id = ?",
    [id]
  );

  return employee;
};

module.exports = selectEmpById;
