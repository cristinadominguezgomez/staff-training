const getPool = require("../../database/getPool");

const insertEmp = async ({
  email,
  encryptedPassword,
  name,
  registrationCode,
  avatarName,
}) => {
  /** Nos traemos el pool */
  const pool = getPool();

  /** Realizamos una query donde insertamos un nuevo usuario con los datos recibidos por parámetro */
  const [{ insertId }] = await pool.query(
    "INSERT INTO employees (email, password, name, registrationCode, avatar) VALUES (?, ?, ?, ?, ?)",
    [email, encryptedPassword, name, registrationCode, avatarName]
  );

  /** Retornamos el id del nuevo usuariio creado */
  return insertId;
};

module.exports = insertEmp;
