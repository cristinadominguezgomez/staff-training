const {
  selectExerciseById,
  updateExerciseById,
} = require("../../repositories/exercises");

const uploadExerciseSchema = require("../../schemas/uploadExerciseSchema");
const idExerciseSchema = require("../../schemas/idExerciseSchema");
const { generateError } = require("../../helpers");

const patchEditExercises = async (req, res, next) => {
  try {
    const { id } = req.params;

    await idExerciseSchema.validateAsync(id);
    await uploadExerciseSchema.validateAsync(req.body);

    const ExercisesDB = await selectExerciseById(id);

    const { employee_id } = ExercisesDB;

    if (!ExercisesDB) {
      throw generateError("Entry does not exist", 404);
    }

    const employeeId = req.auth.id;

    if (employee_id !== employeeId) {
      throw generateError("You cant update someone else's exercise", 400);
    }

    await updateExerciseById({ ...ExercisesDB, ...req.body });

    res.status(200).send({ status: "ok", message: "Exercise updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = patchEditExercises;
