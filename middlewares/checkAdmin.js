// const { generateError } = require("../middlewares");

const { selectEmpById } = require("../repositories/employees");

// const checkAdmin = async (req, res, next) => {
//   try {
//     if (req.auth.role !== "admin") {
//       throw generateError("You must be an admin to delete an employee", 400);
//     }

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = checkAdmin;

const checkAdmin = async (req, res, next) => {

  try {
    const { id } = req.params;
    console.log(id,"este es el id")
    // controlo si el usuario logeado puede modificar la entry
    // controlar el usuario que creó la entry, si no es el mismo del token o admin --> error

    const [current] = await selectEmpById(id);
    console.log(current,"current");

    if (
      current[0].employee_id !== req.userAuth.id &&
      req.userAuth.role !== "admin"
    ) {
      // ERROR
      const error = new Error(
        "No tienes los permisos para editar esta entrada"
      );
      error.httpStatus = 401;
      throw error;
    }
    next();

  } catch (error) {
    next(error);
  }
};

module.exports = checkAdmin;
