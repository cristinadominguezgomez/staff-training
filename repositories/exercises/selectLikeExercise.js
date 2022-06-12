const getPool = require("../../database/getPool");

const selectLikeExercise = async (likeId) => {
  const pool = getPool();

  const [[like]] = await pool.query(
    "SELECT * FROM likes WHERE exercise_id = ?",
    [likeId]
  );

  return like;
};

module.exports = selectLikeExercise;
