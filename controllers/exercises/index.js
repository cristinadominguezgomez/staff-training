const getExercisesAll = require("./getExercisesAll");
const getExerciseById = require("./getExerciseById");
const deleteExerciseById = require("./deleteExerciseById");
const putExercise = require("./putExercise");
const patchEditExercises = require("./patchEditExercises");
const newExercise = require("./newExercise");
const createLike = require("./createLike");
const deleteLike = require("./deleteLike");

module.exports = {
  getExercisesAll,
  getExerciseById,
  deleteExerciseById,
  putExercise,
  patchEditExercises,
  newExercise,
  createLike,
  deleteLike,
};
