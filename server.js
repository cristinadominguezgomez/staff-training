require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");

const { SERVER_PORT } = process.env;

const auth = require("./helpers/auth");

const {
  registerEmployees,
  loginEmployees,
  activateEmpControllers,
  getEmployeeById,
  getEmployeesAll,
  deleteEmpById,
} = require("./controllers/employees"); //trae las funciones desde el index controllers

const {
  getExercisesAll,
  getExerciseById,
  deleteExerciseById,
  putExercise,
  patchEditExercises,
  newExercise,
  createLike,
  deleteLike,
} = require("./controllers/exercises");

const {
  checkAdmin,
} = require("./middlewares");


const app = express();

app.use(express.json()); //procesa los datos en formato json
app.use(fileUpload());

//rutas de employees
app.post("/employees", registerEmployees); //registerEmp
app.get("/employees", getEmployeesAll); //getEmpAll
app.get("/employees/:id", getEmployeeById); //getEmpById
app.delete("/employees/:id", auth, checkAdmin, deleteEmpById);
app.get("/employees/activate/:registrationCode", activateEmpControllers);
app.post("/login", loginEmployees);

//rutas de excercises
app.get("/exercises", getExercisesAll);
// app.get("/exercises/:search", getExercisesFilter);
app.post("/exercises", auth, checkAdmin, newExercise);
app.get("/exercise/:id", getExerciseById);
app.patch("/exercise/:id", auth, checkAdmin, patchEditExercises);
app.delete("/exercise/:id", auth, checkAdmin, deleteExerciseById);
app.put("/exercise/:id", auth, checkAdmin, putExercise);
// app.delete("/excercise/:id", deleteExcercisesController);
app.post("/exercise/:id/likes", auth, createLike);
app.post("/exercise/:id/deletelikes", auth, deleteLike);

//middleware de 404
app.use((req, resp) => {
  resp.status(404).send({
    status: "error",
    message: "Not found",
  });
});

//Middleware de gestion de errores
app.use((error, req, resp, next) => {
  console.error(error);

  resp.status(error.httpStatus || 500).send({
    status: "error",
    message: error.message,
  });
});

//lanzamos el servidor
app.listen(3000, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
