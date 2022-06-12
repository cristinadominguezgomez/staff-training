const selectExerciseAll = require("./selectExercisesAll");
const selectExerciseById = require("./selectExerciseById");
const removeExerciseById = require("./removeExerciseById");
const updateExercise = require("./updateExercise");
const updateExerciseById = require("./updateExerciseById");
const insertExercise = require("./insertExercise");
const insertLike = require("./insertLike");
const removeLike = require("./removeLike");
const selectLikeExercise = require("./selectLikeExercise");

module.exports = {
  selectExerciseAll,
  selectExerciseById,
  removeExerciseById,
  updateExercise,
  updateExerciseById,
  insertExercise,
  insertLike,
  removeLike,
  selectLikeExercise,
};
