const getPool = require("../../database/getPool");

const insertEmp = async ({
  email,
  encryptedPassword,
  name,
  registrationCode,
}) => {
  /** Nos traemos el pool */
  const pool = getPool();

  /** Realizamos una query donde insertamos un nuevo usuario con los datos recibidos por parámetro */
  const [{ insertId }] = await pool.query(
    "INSERT INTO employees (email, password, name, registrationCode) VALUES (?, ?, ?, ?)",
    [email, encryptedPassword, name, registrationCode]
  );

  /** Retornamos el id del nuevo usuariio creado */
  return insertId;
};

module.exports = insertEmp;
