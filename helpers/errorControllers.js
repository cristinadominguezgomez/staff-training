//esta funcion es para crear los errores de todos los ficheros controllers.

const generateError = (message, status) => {
  const error = new Error("Debes enviar un email y una password");
  error.httpStatus = 400;
  return error;
};

module.exports = {
  generateError,
};
