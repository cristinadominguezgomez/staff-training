# Quick start 🔥

> hacer clone del repositorio

```
git clone git@github.com/cristinadominguezgomez/staff-training.git
```

> abrir carpeta "staff-training" con Visual Studio

```
cd staff-training
code .
```

> en la terminal del VS

```
npm install
```

> crear una base de datos vacía de mysql con el nombre que queráis

> crear .env con las varibles de entorno que figuran en el .env.example con todos vuestros datos

❗ _en database_name deberéis poner la base de datos que habéis creado_

> crear las tablas

```
node database/initDB
```

> insertar datos en tablas

```
node database/populateDB
```

> una vez hecho todo esto, solo quedaría iniciar el proyecto

```
npm run dev
```

> si quieres probarlo, importa la colección de postman de la carpeta "docs" 😄

# Base de datos 💾

## Tablas

Employees

- id
- email \*
- password \*
- active
- role
- name
- avatar
- registrationCode
- created_at

Exercises

- id
- title \*
- description \*
- type
- muscle_group
- image
- created_at
- employee_id

Likes

- id
- created_at
- employee_id
- exercise_id

# API 📚

- POST /employees

  - Registra un empleado
  - Body (Form-data):
    - email \*
    - password \*
    - name \*
    - avatar
  - Retorna todos los datos del empleado registrado

- GET /employees

  - Retorna el listado de empleados

- GET /employees/:id

  - Retorna el empleado especificado, con sus fotos incluídas

- DELETE /employees/:id

  - Se necesita autenticación como admin
  - Retorna un mensaje indicando que el usuario se ha borrado correctamente

- GET /employees/activate/:registrationCode

  - Activa un empleado en la API
  - Retorna un mensaje indicando que el usuario se ha activado

- POST /login

  - Loguea a un usuario
  - Body (JSON):
    - email \*
    - password \*
  - Retorna un JWT token

- GET /exercises

  - Retorna el listado de ejercicios y busca por type y muscle_group

- POST /exercises

  - Se necesita autenticación como administrador
  - Body (Form-data):

    - title \*
    - description \*
    - type
    - muscle_group
    - image

  - Retorna los datos del ejercicio creado

- GET /exercise/:id

  - Retorna el ejercicio especificado, con sus foto incluída

- DELETE /exercise/:id

  - Se necesita autenticación
  - Retorna un mensaje indicando que la imagen se ha eliminado correctamente

- PATCH /exercise/:id

  - Se necesita autenticación como administrador
  - Nos permite actualizar cualquier campo del ejercicio de forma individual
  - Requiere que enviemos solo los campos que vamos a actualizar
  - Retorna un mensaje indicando que la entrada se ha actualizado correctamente

- PUT /exercise/:id

  - Se necesita autenticación como administrador
  - Nos permite actualizar todos los datos del ejercicio
  - Requiere que enviemos todos los campos

  - Body (Form-data):

  - title \*
  - description \*
  - type
  - muscle_group
  - image

  - Retorna un mensaje con todos los datos del ejercicio modificado

- POST /exercise/:id/likes

  - Se necesita autenticación del empleado

  - Retorna un mensaje indicando que se ha hecho like

- DELETE /exercise/:id/deletelikes

  - Se necesita autenticación del empleado
  - Solo lo puede eliminar el empleado que lo ha realizado
  - Retorna un mensaje indicando que se ha eliminado un like

# Dudas 🤔

Cualquier consulta que tengáis, podéis enviarnos un correo a campodonicolilen1@gmail.com,
shirley.cd853f@gmail.com ó dominguez.ac@gmail.com 🤓
