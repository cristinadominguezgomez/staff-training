require("dotenv").config();
const getPool = require("./getPool");
const faker = require("faker");
const { v4: uuidv4 } = require("uuid");

const { ADMIN_NAME, ADMIN_PASSWORD, ADMIN_EMAIL } = process.env;

const populateDB = async () => {
  try {
    const pool = getPool();

    console.log("Inserting admin in employees...");
    await pool.query(`
      INSERT INTO employees (email, password, role, name)
      VALUES (
          "${ADMIN_EMAIL}",
          "${ADMIN_PASSWORD}",
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

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

populateDB();
