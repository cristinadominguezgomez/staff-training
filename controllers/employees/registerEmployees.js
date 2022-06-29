const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const insertEmp = require("../../repositories/employees/insertEmp");
const { processImage, sendMail } = require("../../helpers");
const newEmployeeSchema = require("../../schemas/newEmployeeSchema");

const registerEmployees = async (req, res, next) => {
  try {
    await newEmployeeSchema.validateAsync(req.body);

    const { email, password, name } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const registrationCode = uuidv4();

    let avatarName;

    if (req.files && req.files.avatar) {
      const { avatar } = req.files;
      avatarName = await processImage(avatar.data);
    }

    const data = await insertEmp({
      email,
      encryptedPassword,
      name,
      registrationCode,
      avatarName,
    });

    const { SERVER_HOST, SERVER_PORT } = process.env;

    await sendMail(
      "Welcome! In this space you will find all the necessary exercises to organize your class.",
      `<p>Activate your account here:</p>
      <a href="http://${SERVER_HOST}:${SERVER_PORT}/employees/activate/${registrationCode}">ACTIVATES</a>`,
      email
    );

    res.status(201).send({
      status: "ok",
      message: "Usuario registrado correctamente",
      data: { id: data, ...req.body },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = registerEmployees;
