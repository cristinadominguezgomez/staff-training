const { generateError } = require("../../helpers/errorControllers");

const {
  selectUserByActivationCode,
} = require("../../repositories/employees/selectEmpActivationCode");

//este controlador informa si el empleado esta activado o no.

const activateEmpControllers = (req, resp, next) => {
  try {
    const { registrationCode } = req.params;
    const employee = selectUserByActivationCode(registrationCode);

    if (!employee) {
      const error = new Error(
        "NO hay usuarios sin activar con ese codigo de registro"
      );
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = activateEmpControllers;
