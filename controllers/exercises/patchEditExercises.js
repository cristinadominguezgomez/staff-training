const {
  selectExerciseById,
  updateExerciseById,
} = require("../../repositories/exercises");
const { processImage } = require("../../helpers");

const uploadExerciseSchema = require("../../schemas/uploadExerciseSchema");
const idExerciseSchema = require("../../schemas/idExerciseSchema");
const { generateError } = require("../../helpers");

const patchEditExercises = async (req, res, next) => {
  try {
    const { id } = req.params;

    await idExerciseSchema.validateAsync(id);
    await uploadExerciseSchema.validateAsync(req.body);

    const exercise = await selectExerciseById(id);

    const { employee_id } = exercise;

    if (!exercise) {
      throw generateError("Entry does not exist", 404);
    }

    const employeeId = req.auth.id;

    if (employee_id !== employeeId) {
      throw generateError("You cant update someone else's exercise", 400);
    }

    //actulizar la imagen

    let imageExercise;
    if (req.files && req.files.image) {
      const { image } = req.files;
      imageExercise = await processImage(image.data);
    }

    await updateExerciseById({ ...exercise, ...req.body, image: imageExercise });

    res.status(200).send({ status: "ok", message: "Exercise updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = patchEditExercises;
