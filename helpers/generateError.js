//esta funcion es para crear los errores de todos los ficheros controllers.

const generateError = (message, status) => {
  const error = new Error(message, status);
  console.log(message,status)
  throw error;
};

module.exports = generateError;


// const generateError = (message, status) => {
//   const error = new Error(message);
//   error.statusCode = status;
//   return error;
// };

// module.exports = generateError;
