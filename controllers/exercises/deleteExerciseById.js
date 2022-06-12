const removeExerciseById = require("../../repositories/exercises/removeExerciseById");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const deleteExerciseById = async (req, res, next) => {
  try {
    const { id } = req.params;

    await idExerciseSchema.validateAsync(id);

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
