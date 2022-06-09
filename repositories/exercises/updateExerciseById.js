const getPool = require("../../database/getPool");

const updateExerciseById = async ({
  title,
  description,
  type,
  muscle_group,
  id,
  image,
}) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE exercises SET title = ?, description = ?, type = ?, muscle_group = ?, image = ? WHERE id = ?",
    [title, description, type, muscle_group, image, id]
  );

  return affectedRows;
};

module.exports = updateExerciseById;
