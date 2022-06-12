const getPool = require("../../database/getPool");

const removeLike = async (whoLiked, exerciseId) => {
  const pool = getPool();

  const [{ afectedRows }] = await pool.query(
    "DELETE FROM likes WHERE employee_id = ? AND exercise_id = ?",
    [whoLiked, exerciseId]
  );

  return afectedRows;
};

module.exports = removeLike;
