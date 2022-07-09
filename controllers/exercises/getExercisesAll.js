const selectExerciseAll = require("../../repositories/exercises/selectExercisesAll");

const getExercisesAll = async (req, res, next) => {
  try {
    const { type, muscle_group } = req.query;
    const exercise = await selectExerciseAll(type, muscle_group);

    res.status(200).send({ status: "ok", data: exercise });

  } catch (error) {
    next(error);
  }
};

module.exports = getExercisesAll;
