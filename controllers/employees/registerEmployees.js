const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const insertEmp = require("../../repositories/employees/insertEmp");
const { processImage, sendMail } = require("../../helpers");
const newEmployeeSchema = require("../../schemas/newEmployeeSchema");

const registerEmployees = async (req, res, next) => {
  try {
    await newEmployeeSchema.validateAsync(req.body);
    /** Nos traemos el email y la password del body */
    const { email, password, name } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const registrationCode = uuidv4();

    /** Si falta el email, la password o el name, lanzamos un error */
    if (!(email && password && name)) {
      const error = new Error("User email, password and name are required");
      error.statusCode = 400;
      throw error;
    }

    let avatarName;

    if (req.files && req.files.avatar) {
      const { avatar } = req.files;
      avatarName = await processImage(avatar.data);
    }

    /** Insertamos los datos del usuario en la base de datos */
    const data = await insertEmp({
      email,
      encryptedPassword,
      name,
      registrationCode,
      avatarName,
    });

    //Enviamos un email para la activacion
    const { SERVER_HOST, SERVER_PORT } = process.env;

    await sendMail(
      "Welcome! In this space you will find all the necessary exercises to organize your class.",
      `<p>Activate your account here:</p>
      <a href="http://${SERVER_HOST}:${SERVER_PORT}/employees/activate/${registrationCode}">ACTIVATES</a>`,
      email
    );

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

module.exports = registerEmployees;
