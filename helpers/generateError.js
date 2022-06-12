const generateError = (message, status) => {
  const error = new Error(message, status);
  throw error;
};

module.exports = generateError;
