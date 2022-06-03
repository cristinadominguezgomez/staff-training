const { generateError } = require("../../helpers/errorControllers");

//este controlador nos permite registrarnos, tiene que recoger del body la informacion.

const newEmployeesController = (req, resp, next) => {
  try {
    //console.log(req.url, req.method, req.body);

    const { email, password } = req.body;
    //hay que hacer esta validacion con joi
    if (!email || !password) {
      throw generateError("El email o la password son incorrectas", 400);
    }

    resp.status(201).send({
      status: "ok",
      message: "Usuario registrado correctamente",
      data: { email, password },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newEmployeesController;
