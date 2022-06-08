//esta funcion es para crear los errores de todos los ficheros controllers.

const generateError = (message, status) => {
  const error = new Error(message, status);
  throw error;
};

module.exports = generateError;
