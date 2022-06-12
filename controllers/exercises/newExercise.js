const { processImage } = require("../../helpers");
const insertExercise = require("../../repositories/exercises/insertExercise");
const newExerciseSchema = require("../../schemas/newExerciseSchema");

const newExercise = async (req, res, next) => {
  try {
    await newExerciseSchema.validateAsync(req.body);
    const { title, description, type, muscle_group } = req.body;

    const employeeId = req.auth.id;

    let imageExercise;
    if (req.files && req.files.image) {
      const { image } = req.files;
      imageExercise = await processImage(image.data);
    }

    const insertId = await insertExercise({
      title,
      description,
      type,
      muscle_group,
      employeeId,
      imageExercise,
    });

    res.status(201).send({
      status: "ok",
      message: "New Exercise",
      data: {
        id: insertId,
        title,
        description,
        type,
        muscle_group,
        employeeId,
        imageExercise,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newExercise;
