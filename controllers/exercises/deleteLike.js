const { selectLikeExercise } = require("../../repositories/exercises");
const generateError = require("../../helpers/generateError");
const { removeLike } = require("../../repositories/exercises");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const deleteLike = async (req, res, next) => {
  try {
    const { id } = req.params;

    const likeId = await idExerciseSchema.validateAsync(id);

    const { employee_id: whoLiked } = await selectLikeExercise(likeId);
    const loginEmployeeId = req.auth.id;

    if (whoLiked !== loginEmployeeId) {
      generateError("Can't remove like in this exercise", 403);
    }

    await removeLike(whoLiked, likeId);

    res.status(200).send({ status: "ok", message: "Remove Like" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteLike;
