const getPool = require("../../database/getPool");

const removeLike = async (employeeId, exerciseId) => {
  const pool = getPool();

  const [{ afectedRows }] = await pool.query(
    "DELETE FROM likes WHERE employee_id = ? AND exercise_id = ?",
    [employeeId, exerciseId]
  );

  return afectedRows;
};

module.exports = removeLike;
