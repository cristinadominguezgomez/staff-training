const getPool = require("../../database/getPool");

const selectExercisesAll = async (type, muscle_group) => {
  const pool = getPool();

  let query =
    "SELECT e.*, COUNT(likes.id) likes FROM exercises e LEFT JOIN likes ON e.id = likes.exercise_id";

  const values = [];
  let clause = "WHERE";

  if (type) {
    query += `${clause} type LIKE ?`;
    values.push(`${type}`);
    clause = " AND";
  }

  if (muscle_group) {
    query += `${clause} muscle_group LIKE ?`;
    values.push(`${muscle_group}`);
    clause = " AND";
  }

  query += " GROUP BY e.id";

  const [ejercicios] = await pool.query(query, values);

  return ejercicios;
};

module.exports = selectExercisesAll;
