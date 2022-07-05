const getPool = require("../../database/getPool");

const insertLike = async (employeeId, exerciseId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO likes (employee_id, exercise_id) VALUES (?, ?)",
    [employeeId, exerciseId]
  );

  return insertId;
};

module.exports = insertLike;
