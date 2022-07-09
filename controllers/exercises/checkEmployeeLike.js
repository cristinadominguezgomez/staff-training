const selectLikeExercise = require("../../repositories/exercises/selectLikeExercise");

const checkEmployeeLike = async (req, res, next) => {
  try {
    const { id: idExercise } = req.params;
    const idEmployee = req.auth.id;

    const like = await selectLikeExercise(idExercise, idEmployee);

    res
      .status(201)
      .send({ status: "ok", data: { didEmployeeLike: like ? true : false } });
  } catch (error) {
    next(error);
  }
};

module.exports = checkEmployeeLike;
