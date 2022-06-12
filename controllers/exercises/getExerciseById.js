// const { generateError } = require("../../helpers");
const { generateError } = require("../../helpers");
const { selectExerciseById } = require("../../repositories/exercises");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const getExerciseById = async (req, res, next) => {
  try {
    const { id: exerciseId } = req.params;

    await idExerciseSchema.validateAsync(exerciseId);

    const exercise = await selectExerciseById(exerciseId);

    if (!exercise) {
      generateError(`The exercise with id: ${exerciseId} does not exist`, 404);
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
