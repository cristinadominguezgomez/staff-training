const {
  updateExercise,
  selectExerciseById,
} = require("../../repositories/exercises");

const putExercise = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { title, description, type, muscle_group } = req.body;

    const exerciseData = { id, title, description, type, muscle_group };

    const exerciseBD = await selectExerciseById(id);

    if (!exerciseBD) {
      const error = new Error(`The exercise does not exist`);
      error.statusCode = 404;
      throw error;
    }

    const affectedRows = await updateExercise(exerciseData);
    console.log(affectedRows);
    res.status(200).send({ status: "ok", data: exerciseData });
  } catch (error) {
    next(error);
  }
};

module.exports = putExercise;
