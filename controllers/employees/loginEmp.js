const loginEmpControllers = (req, resp, next) => {
  try {
    resp.send({
      status: "error",
      message: "Not implemented",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginEmpControllers;
