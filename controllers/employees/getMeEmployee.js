const { selectEmpById } = require("../../repositories/employees");

const getMeEmployee = async (req, res, next) => {
  try {
    const employee = await selectEmpById(req.auth.id);

    res.send({
      status: "ok",
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = getMeEmployee;