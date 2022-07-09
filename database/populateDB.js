require("dotenv").config();
const getPool = require("./getPool");
const faker = require("faker");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const { ADMIN_NAME, ADMIN_PASSWORD, ADMIN_EMAIL } = process.env;

const populateDB = async () => {
  try {
    const pool = getPool();

    console.log("Inserting admin in employees...");

    let password = ADMIN_PASSWORD;

    password = await bcrypt.hash(password, 10);

    await pool.query(`
      INSERT INTO employees (id, email, password, active, role, name)
      VALUES (
          1,
          "${ADMIN_EMAIL}",
          "${password}",
          true,
          "admin",
          "${ADMIN_NAME}"
      );
    `);

    console.log("Inserting employees");

    const employees = 10;

    for (let index = 0; index < employees; index++) {
      const email = faker.internet.email();
      const password = faker.internet.password();
      const name = faker.name.findName();
      const registrationCode = uuidv4();

      await pool.query(`
          INSERT INTO employees (email, password, name, registrationCode)
          VALUES (
            "${email}",
            "${password}",
            "${name}",
            "${registrationCode}"
         );
      `);
    }

    console.log("Inserting exercises");

    const exercises = 10;
    const types = ["aerobic", "strength", "balance", "flexibility"];
    const muscle_groups = [
      "abdominals",
      "chest",
      "back",
      "arms",
      "legs",
      "shoulders",
    ];

    for (let index = 0; index < exercises; index++) {
      const employeeId = 1;
      const title = faker.lorem.words(3);
      const description = faker.lorem.words(5);
      const muscle_group = muscle_groups[Math.floor(Math.random() * muscle_groups.length)];
      const type = types[Math.floor(Math.random() * types.length)];

      await pool.query(`
          INSERT INTO exercises (employee_id, title, description, muscle_group, type)
          VALUES (
            "${employeeId}",
            "${title}",
            "${description}",
            "${muscle_group}",
            "${type}"
         );
      `);
    }

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

populateDB();
