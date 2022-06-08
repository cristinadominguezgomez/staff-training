const { selectExerciseById } = require("../../repositories/exercises");

const getExerciseById = async (req, res, next) => {
  try {
    const { id: exerciseId } = req.params;
    const exercise = await selectExerciseById(exerciseId);

    if (exercise.length === 0) {
      const error = new Error(
        `The exercise with id: ${exerciseId} does not exist`
      );
      error.statusCode = 404;
      throw error;
    }

    res.status(200).send({
      status: "ok",
      data: exercise,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getExerciseById;
