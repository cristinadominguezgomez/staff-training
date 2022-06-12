const { generateError } = require("../helpers");

const checkAdmin = async (req, res, next) => {
  const isAdmin = req.auth.role;

  try {
    if (isAdmin !== "admin") {
      throw generateError(
        "You must be an administrator to perform this action",
        401
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkAdmin;
