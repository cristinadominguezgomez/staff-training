const getExercisesAll = require("./getExercisesAll");
const getExerciseById = require("./getExerciseById");
const deleteExerciseById = require("./deleteExerciseById");
const putExercise = require("./putExercise");
const patchEditExercises = require("./patchEditExercises");
const newExercise = require("./newExercise");
const toggleLike = require("./toggleLike");

module.exports = {
  getExercisesAll,
  getExerciseById,
  deleteExerciseById,
  putExercise,
  patchEditExercises,
  newExercise,
  toggleLike,
};
