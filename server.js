require("dotenv").config();
const express = require("express");

const { SERVER_PORT } = process.env;

const {
  registerEmpController,
  loginEmpControllers,
  activateEmpControllers,
} = require("./controllers/employees"); //trae las funciones desde el index controllers

const app = express();

app.use(express.json()); //procesa los datos en formato json

//rutas de employees
app.post("/employees", registerEmpController); //registerEmp
app.put("/employees/activate/:registrationCode", activateEmpControllers); //es put porque modificamos al bd puede ser get tambien
// app.get("/employees/:id", getEmployeesController); //
app.post("/login", loginEmpControllers); //loginEmp

//rutas de excercises (FALTA CREAR LOS FICHEROS PARA TODAS ESTAS RUTAS)
// app.get("/", getExercisesController);
// app.post("/", newExcerciseController);
// app.get("/excercise/:id", getUnicoExerciseController);
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
