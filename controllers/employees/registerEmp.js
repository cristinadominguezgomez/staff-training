const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const path = require("path");
const insertEmp = require("../../repositories/employees/insertEmp");

const registerEmpController = async (req, res, next) => {
  try {
    /** Nos traemos el email y la password del body */
    const { email, password, name } = req.body;
    /**nos traemos el avatar */
    const { avatar } = req.files;
    //console.log(req.files, "patata");
    const encryptedPassword = await bcrypt.hash(password, 10);

    const registrationCode = uuidv4();

    /** Si falta el email, la password o el avatar, lanzamos un error */
    if (!(email && password && name)) {
      const error = new Error("User email, password and name are required");
      error.statusCode = 400;
      throw error;
    }
    let avatarName;
    if (avatar) {
      const sharpAvatar = sharp(avatar.data);
      const avatarMetadata = await sharpAvatar.metadata();
      avatarName = `${uuidv4()}.${avatarMetadata.format}`;
      if (avatarMetadata.width > 800) {
        sharpAvatar.resize(800);
      }
      const avatarPath = path.join(
        __dirname,
        "../",
        "../",
        "uploads",
        avatarName
      );

      console.log(avatarPath, "PATATA");

      await sharpAvatar.toFile(avatarPath);
    }

    /** Insertamos los datos del usuario en la base de datos */
    const data = await insertEmp({
      email,
      encryptedPassword,
      name,
      registrationCode,
      avatarName,
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
