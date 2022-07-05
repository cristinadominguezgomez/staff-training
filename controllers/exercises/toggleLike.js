const {
  selectLikeExercise,
  insertLike,
  removeLike,
} = require("../../repositories/exercises");
const idExerciseSchema = require("../../schemas/idExerciseSchema");

const toggleLike = async (req, res, next) => {
  try {
    const employeeId = req.auth.id;
    //console.log(employeeId, "employe req auth");
    const { id: exerciseId } = req.params;
    //console.log(exerciseId, "req params");
    await idExerciseSchema.validateAsync(exerciseId);

    const like = await selectLikeExercise(exerciseId, employeeId);

    if (like) {
      await removeLike(employeeId, exerciseId);
      res.status(200).send({ status: "ok", message: "Remove Like" });
      return;
    }

    await insertLike(employeeId, exerciseId);
    res.status(201).send({ status: "ok", message: "Insert Like" });
  } catch (error) {
    next(error);
  }
};

module.exports = toggleLike;
