const removeEmpById = require("../../repositories/employees/removeEmpById");
const idEmployeeSchema = require("../../schemas/idEmployeeSchema");

const deleteEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    await idEmployeeSchema.validateAsync(id);

    const affectedRows = await removeEmpById(id);

    if (affectedRows === 0) {
      const error = new Error("Employee does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).send({ status: "ok", message: "Employee deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteEmployeeById;
