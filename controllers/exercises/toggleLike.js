const { 
  selectExerciseById,
  selectLikeExercise, 
  insertLike,
  removeLike 
} = require("../../repositories/exercises");
const generateError = require("../../helpers/generateError");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const toggleLike = async (req, res, next) => {
  try {
    const { id: exerciseId } = req.params;

    await idExerciseSchema.validateAsync(exerciseId);

    const exercise =  await selectExerciseById(exerciseId);

    if(!exercise) {
       generateError("Exercises does not exist", 404);
    }

    const whoLikedId = req.auth.id;
    const { employee_id: admin } = exercise

    // si es admin no puede hacer like

    if (admin === whoLikedId) {
      generateError("Admins can't like exercises", 403);
    }

    const like = await selectLikeExercise(exerciseId)

    if(like) {
      await removeLike(whoLikedId, exerciseId);
    } else {
      await insertLike(whoLikedId, exerciseId);
    }

    res.status(200).send({ status: "ok", message: "Like" });
  } catch (error) {
    next(error);
  }
};

module.exports = toggleLike;
