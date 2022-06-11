const getPool = require("../../database/getPool");

const insertLike = async (employee_id, exerciseId) => {
  const pool = getPool();

  const [insertId] = await pool.query(
    "INSERT INTO likes (employee_id, exercise_id) VALUES (?, ?)",
    [employee_id, exerciseId]
  );

  return insertId;
};

module.exports = insertLike;
