const bcrypt = require("bcrypt");
const generateError = require("../../helpers/generateError");
const selectEmpByEmail = require("../../repositories/employees/selecEmpByEmail");

const jwt = require("jsonwebtoken");
const newEmployeeSchema = require("../../schemas/newEmployeeSchema");

const loginEmp = async (req, resp, next) => {
  try {
    newEmployeeSchema.validateAsync(req.body);

    const { email, password } = req.body;

    if (!(email && password)) {
      generateError("Email and password are required", 400);
    }

    const employee = await selectEmpByEmail(email);

    if (!employee) {
      generateError("Email and password are wrong", 401);
    }

    // comparo las contraseñas
    const encryptedPassword = employee?.password;

    const isLoginValid = await bcrypt.compare(password, encryptedPassword);

    if (!isLoginValid) {
      generateError("Email and password are wrong", 401);
    }

    //compruebo si tiene registrationCode

    if (employee.registrationCode) {
      generateError("User not activated. Check your email", 400);
    }

    // si todo esta bien devolvemos el token

    const payload = {
      id: employee.id,
      role: employee.role,
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "30d" });

    resp.status(200).send({ status: "ok", data: token });
  } catch (error) {
    next(error);
  }
};

module.exports = loginEmp;
