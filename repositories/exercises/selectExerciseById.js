const getPool = require("../../database/getPool");

const selectExerciseById = async (id) => {
  const pool = getPool();

  const [[exercise]] = await pool.query(
    "SELECT e.*, COUNT(l.id) likes FROM exercises e LEFT JOIN likes l ON e.id = l.exercise_id WHERE e.id = ?",
    [id]
  );

  return exercise;
};

module.exports = selectExerciseById;
