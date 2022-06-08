const getPool = require("../../database/getPool");

const deleteRegistrationCode = async (employeeId) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE employees SET registrationCode = NULL WHERE id = ?",
    [employeeId]
  );

  return affectedRows;
};

module.exports = deleteRegistrationCode;
