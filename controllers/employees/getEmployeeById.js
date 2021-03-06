const selectEmpById = require("../../repositories/employees/selectEmpById");
const idEmployeeSchema = require("../../schemas/idEmployeeSchema");

const getEmployeeById = async (req, res, next) => {
  try {
    const { id: employeeId } = req.params;

    await idEmployeeSchema.validateAsync(employeeId);

    const employee = await selectEmpById(employeeId);

    if (!employee) {
      const error = new Error("Employee does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).send({
      status: "ok",
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getEmployeeById;
