const deleteEmployees = async (req, resp, next) => {
  try {
    resp.send({
      status: "error",
      message: "Not implemented",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteEmployees;
