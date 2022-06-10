const selectExerciseAll = require("../../repositories/exercises/selectExercisesAll");

const getExercisesAll = async (req, res, next) => {

  try {

    const query = req.query
    const employees = await selectExerciseAll(query);

    res.status(200).send({ status: "ok", data: employees });
  } catch (error) {
    next(error);
  }
};

module.exports = getExercisesAll;
