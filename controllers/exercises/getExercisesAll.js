const selectExerAll = require("../../repositories/exercises/selectExercisesAll");

const getExercisesAll = async (req, res, next) => {
  try {
    const employees = await selectExerAll();

    res.status(200).send({ status: "ok", data: employees });
  } catch (error) {
    next(error);
  }
};

module.exports = getExercisesAll;