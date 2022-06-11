const { selectExerciseById } = require("../../repositories/exercises");
const generateError = require("../../helpers/generateError");
const { insertLike } = require("../../repositories/exercises");
const createLike = async (req, res, next) => {
  try {
    const { id: exerciseId } = req.params;

    const { employee_id } = await selectExerciseById(exerciseId);

    // si es admin no puede hacer like

    if (employee_id === req.auth.id) {
      generateError("Can't do like in this exercise", 403);
    }

    await insertLike(employee_id, exerciseId);

    res.status(200).send({ status: "ok", message: "Like" });
  } catch (error) {
    next(error);
  }
};

module.exports = createLike;
