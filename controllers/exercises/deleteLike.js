const { selectLikeExercise } = require("../../repositories/exercises");
const generateError = require("../../helpers/generateError");
const { removeLike } = require("../../repositories/exercises");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const deleteLike = async (req, res, next) => {
  try {
    const { id } = req.params;

    const exerciseId = await idExerciseSchema.validateAsync(id);

    const liked = await selectLikeExercise(exerciseId);

    if (!liked) {
      generateError("Like does not exist", 404);
    }

    const loginEmployeeId = req.auth.id;
    const { employee_id: whoLiked } = liked;
  
    if (whoLiked !== loginEmployeeId) {
      generateError("Can't remove like in this exercise", 403);
    }

    await removeLike(whoLiked, exerciseId);

    res.status(200).send({ status: "ok", message: "Remove Like" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteLike;
