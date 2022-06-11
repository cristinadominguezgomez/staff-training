const getPool = require("../../database/getPool");

const selectEmpById = async (id) => {
  const pool = getPool();

  console.log(id, "id")
  const [[employee]] = await pool.query(
    // "SELECT * FROM employees WHERE id = ?",
    "SELECT id, name, avatar, role, email, registrationCode, created_at FROM employees WHERE id = ?",
    [id]
  );

  // console.log(employee, "employee");
  return employee;
};

module.exports = selectEmpById;



