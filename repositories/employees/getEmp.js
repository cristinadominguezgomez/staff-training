//este fichero nos muestra la informacion publica de un usuario segun su id

const { generateError } = require("../../helpers/errorControllers");
const { getPool } = require("../../database/getPool");

const getEmployeeId = async (id) => {
  try {
    const pool = await getPool();
    const [result] = await pool.query(
      `SELECT id, email, role, name, avatar FROM users WHERE id=?`,
      [id]
    );

    if (result.length === 0) {
      throw generateError("No existe ningun usuario con ese ID", 404);
    }
    return result[0];
  } finally {
    if (pool) pool.release();
  }
};

module.exports = getEmployeeId;
