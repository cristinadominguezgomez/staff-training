const insertEmp = require("../../repositories/employees/insertEmp");

const registerEmpController = async (req, res, next) => {
  try {
    /** Nos traemos el email y la password del body */
    const { email, password } = req.body;

    /** Si falta el email, la password o el avatar, lanzamos un error */
    if (!(email && password)) {
      const error = new Error("User email, password and avatar are required");
      error.statusCode = 400;
      throw error;
    }

    /** Insertamos los datos del usuario en la base de datos */
    const data = await insertEmp(email, password);

    /** Enviamos la respuesta con código 201 y un JSON que contiene los datos del usuario registrado */
    res.status(201).send({
      status: "ok",
      message: "Usuario registrado correctamente",
      data,
    });
  } catch (err) {
    /** En caso de error, lo mandamos al middleware de errores con next(err) */
    next(err);
  }
};

module.exports = registerEmpController;
