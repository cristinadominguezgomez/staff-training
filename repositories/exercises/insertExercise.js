const getPool = require("../../database/getPool");

const insertExercise = async ({
  title,
  description,
  type,
  muscle_group,
  employeeId,
  imageExercise,
}) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO exercises (title, description, type, muscle_group, employee_id, image) VALUES (?, ?, ?, ?, ?, ?)",
    [title, description, type, muscle_group, employeeId, imageExercise]
  );

  return insertId;
};

module.exports = insertExercise;
