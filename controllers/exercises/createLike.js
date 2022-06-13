const { selectExerciseById } = require("../../repositories/exercises");
const generateError = require("../../helpers/generateError");
const { insertLike } = require("../../repositories/exercises");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const createLike = async (req, res, next) => {
  try {
    const { id: exerciseId } = req.params;

    await idExerciseSchema.validateAsync(exerciseId);

    const createLike =  await selectExerciseById(exerciseId);

    if(!createLike) {
       generateError("Exercises does not exist", 404);
    }

    const whoLikedId = req.auth.id;
    const { employee_id: admin } = createLike

    // si es admin no puede hacer like

    if (admin === whoLikedId) {
      generateError("Can't do like in this exercise", 403);
    }

    await insertLike(whoLikedId, exerciseId);

    res.status(200).send({ status: "ok", message: "Like" });
  } catch (error) {
    next(error);
  }
};

module.exports = createLike;
