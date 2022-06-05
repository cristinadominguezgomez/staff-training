const getPool = require("../../database/getPool");

const removeEmpById = async (id) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM employees WHERE id = ?",
    [id]
  );

  return affectedRows;
};

module.exports = removeEmpById;
