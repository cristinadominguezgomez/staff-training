const {
  selectExerciseById,
  updateExerciseById,
} = require("../../repositories/exercises");

const { generateError } = require("../../helpers");
// const { editEntrySchema, idEntrySchema } = require("../../schemas/entries");

const patchEditExercises = async (req, res, next) => {
  try {
    const { id } = req.params;
    // await idEntrySchema.validateAsync(idEntry);

    // await editEntrySchema.validateAsync(req.body);

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
