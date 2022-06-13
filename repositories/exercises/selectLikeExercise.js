const getPool = require("../../database/getPool");

const selectLikeExercise = async (exerciseId) => {
  const pool = getPool();

  const [[like]] = await pool.query(
    "SELECT * FROM likes WHERE exercise_id = ?",
    [exerciseId]
  );
  return like;
};

module.exports = selectLikeExercise;
