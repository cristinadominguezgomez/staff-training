require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");

const { SERVER_PORT } = process.env;

const auth = require("./helpers/auth");

const {
  registerEmpController,
  loginEmp,
  activateEmpControllers,
  getEmpByIdController,
  getEmployeesController,
  deleteEmpByIdController,
} = require("./controllers/employees"); //trae las funciones desde el index controllers

const {
  getExercisesAll,
  getExerciseById,
  deleteExerciseById,
  putExercise,
  patchEditExercises,
  newExercise,
} = require("./controllers/exercises");

const app = express();

app.use(express.json()); //procesa los datos en formato json
app.use(fileUpload());

//rutas de employees
app.post("/employees", registerEmpController); //registerEmp
app.get("/employees", getEmployeesController); //getEmpAll
app.get("/employees/:id", getEmpByIdController); //getEmpById
app.delete("/employees/:id", deleteEmpByIdController);
app.get("/employees/activate/:registrationCode", activateEmpControllers);
app.post("/login", loginEmp);

//rutas de excercises
app.get("/exercises", getExercisesAll);
// app.get("/exercises/:search", getExercisesFilter);
app.post("/exercises", auth, newExercise);

app.get("/exercise/:id", getExerciseById);
app.patch("/exercise/:id", auth, patchEditExercises);
app.delete("/exercise/:id", auth, deleteExerciseById);
app.put("/exercise/:id", auth, putExercise);
// app.delete("/excercise/:id", deleteExcercisesController);

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
