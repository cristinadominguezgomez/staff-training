const getPool = require("../../database/getPool");

const insertExercise = async ({
  title,
  description,
  type,
  muscle_group,
  employeeId,
}) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO exercises (title, description, type, muscle_group, employee_id) VALUES (?, ?, ?, ?, ?)",
    [title, description, type, muscle_group, employeeId]
  );

  return insertId;
};

module.exports = insertExercise;
