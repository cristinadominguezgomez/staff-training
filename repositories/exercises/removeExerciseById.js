const getPool = require("../../database/getPool");

const removeExerciseById = async (id) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM exercises WHERE id = ?",
    [id]
  );

  return affectedRows;
};

module.exports = removeExerciseById;
