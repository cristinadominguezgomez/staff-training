const getPool = require("../../database/getPool");

const updateExercise = async ({
  title,
  description,
  type,
  muscle_group,
  id,
}) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE exercises SET title = ?, description = ?, type = ?, muscle_group = ? WHERE id = ?",
    [title, description, type, muscle_group, id]
  );

  return affectedRows;
};

module.exports = updateExercise;
