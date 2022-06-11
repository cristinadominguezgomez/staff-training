const removeExerciseById = require("../../repositories/exercises/removeExerciseById");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const deleteExerciseById = async (req, res, next) => {
  try {
    await idExerciseSchema.validateAsync(req.params);
    const { id } = req.params;

    const affectedRows = await removeExerciseById(id);

    if (affectedRows === 0) {
      const error = new Error("Exercise does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).send({ status: "ok", message: "Exercise deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteExerciseById;
