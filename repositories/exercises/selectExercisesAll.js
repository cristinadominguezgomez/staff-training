const getPool = require("../../database/getPool");

const selectExercisesAll = async (filters) => {
  const pool = getPool();

  let query = "SELECT * FROM exercises WHERE true";

  let values = [];

  if (filters.type) {
    query += " AND type = ?";
    values.push(filters.type);
  }

  if (filters.muscle_group) {
    query += " AND muscle_group = ?";
    values.push(filters.muscle_group);
  }

  const [exercises] = await pool.query(query, values);

  return exercises;
};

module.exports = selectExercisesAll;
