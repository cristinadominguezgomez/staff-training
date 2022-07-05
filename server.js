require("dotenv").config();

const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");

const { SERVER_PORT } = process.env;

const auth = require("./helpers/auth");

const {
  registerEmployees,
  loginEmployees,
  activateEmployee,
  getEmployeeById,
  getEmployeesAll,
  deleteEmployeeById,
  getMeEmployee,
} = require("./controllers/employees");

const {
  getExercisesAll,
  getExerciseById,
  deleteExerciseById,
  putExercise,
  patchEditExercises,
  newExercise,
  toggleLike,
} = require("./controllers/exercises");

const { checkAdmin } = require("./middlewares");

const app = express();

app.use(cors());

app.use(express.json());
app.use(fileUpload());
app.use("/media", express.static("uploads")); // para acceder a cualquier fichero que este dentro de la carpeta uploads

//rutas de employees

app.get("/employees/me", auth, getMeEmployee);

app.post("/employees", registerEmployees);
app.get("/employees", getEmployeesAll);
app.get("/employees/:id", getEmployeeById);
app.delete("/employees/:id", auth, checkAdmin, deleteEmployeeById);
app.get("/employees/activate/:registrationCode", activateEmployee);
app.post("/login", loginEmployees);

//rutas de excercises
app.get("/exercises", getExercisesAll);
app.post("/exercises", auth, checkAdmin, newExercise);
app.get("/exercise/:id", getExerciseById);
app.patch("/exercise/:id", auth, checkAdmin, patchEditExercises);
app.delete("/exercise/:id", auth, checkAdmin, deleteExerciseById);
app.put("/exercise/:id", auth, checkAdmin, putExercise);
app.post("/exercise/:id/like", auth, toggleLike);

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
