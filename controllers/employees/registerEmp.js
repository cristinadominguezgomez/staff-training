const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const insertEmp = require("../../repositories/employees/insertEmp");

const registerEmpController = async (req, res, next) => {
  try {
    /** Nos traemos el email y la password del body */
    const { email, password, name } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const registrationCode = uuidv4();

    /** Si falta el email, la password o el avatar, lanzamos un error */
    if (!(email && password && name)) {
      const error = new Error("User email, password and name are required");
      error.statusCode = 400;
      throw error;
    }

    /** Insertamos los datos del usuario en la base de datos */
    const data = await insertEmp({
      email,
      encryptedPassword,
      name,
      registrationCode,
    });

    /** Enviamos la respuesta con código 201 y un JSON que contiene los datos del usuario registrado */
    res.status(201).send({
      status: "ok",
      message: "Usuario registrado correctamente",
      data: { id: data, ...req.body },
    });
  } catch (err) {
    /** En caso de error, lo mandamos al middleware de errores con next(err) */
    next(err);
  }
};

module.exports = registerEmpController;
