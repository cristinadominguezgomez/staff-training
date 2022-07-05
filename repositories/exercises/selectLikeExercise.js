const getPool = require("../../database/getPool");

const selectLikeExercise = async (exerciseId, employeeId) => {
  const pool = getPool();

  const [[like]] = await pool.query(
    "SELECT * FROM likes WHERE exercise_id = ? AND employee_id = ?",
    [exerciseId, employeeId]
  );
  return like;
};

module.exports = selectLikeExercise;
