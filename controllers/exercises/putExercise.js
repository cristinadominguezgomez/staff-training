const {
  updateExercise,
  selectExerciseById,
} = require("../../repositories/exercises");

const uploadExerciseSchema = require("../../schemas/uploadExerciseSchema");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const putExercise = async (req, res, next) => {
  try {
    const { id } = req.params;

    await idExerciseSchema.validateAsync(id);
    await uploadExerciseSchema.validateAsync(req.body);

    const { title, description, type, muscle_group } = req.body;

    const exerciseData = { id, title, description, type, muscle_group };

    const exerciseBD = await selectExerciseById(id);

    if (!exerciseBD) {
      const error = new Error(`The exercise does not exist`);
      error.statusCode = 404;
      throw error;
    }

    const affectedRows = await updateExercise(exerciseData);
    res.status(200).send({ status: "ok", data: exerciseData });
  } catch (error) {
    next(error);
  }
};

module.exports = putExercise;
