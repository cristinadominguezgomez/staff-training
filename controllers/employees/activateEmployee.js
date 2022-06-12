const {
  selectEmpByActivationCode,
  deleteRegistrationCode,
} = require("../../repositories/employees");

const activateEmployee = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;

    const employee = await selectEmpByActivationCode(registrationCode);

    if (!employee) {
      const error = new Error("Invalid registration code or already activated");
      error.statusCode = 404;
      throw error;
    }

    await deleteRegistrationCode(employee.id);

    res.status(200).send({ status: "ok", message: "Employee activated" });
  } catch (error) {
    next(error);
  }
};

module.exports = activateEmployee;
