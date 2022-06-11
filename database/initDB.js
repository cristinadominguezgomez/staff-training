require("dotenv").config();
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    console.log("Deleting tables...");

    await pool.query("DROP TABLE IF EXISTS likes;");
    await pool.query("DROP TABLE IF EXISTS exercises;");
    await pool.query("DROP TABLE IF EXISTS employees;");

    console.log("Creating employees table...");

    await pool.query(`
      CREATE TABLE employees (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        active BOOLEAN DEFAULT false,
        role ENUM("normal", "admin") DEFAULT "normal",
        name VARCHAR(100),
        avatar VARCHAR(300),
        registrationCode VARCHAR(100),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP)
      `);

    console.log("Creating exercises table...");

    await pool.query(`
        CREATE TABLE exercises (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            description VARCHAR(500) NOT NULL,
            type VARCHAR(100),
            muscle_group VARCHAR(50),
            image VARCHAR(100),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            employee_id INT UNSIGNED NOT NULL,
            FOREIGN KEY (employee_id) REFERENCES employees(id)
            );
            `);

    console.log("Creating likes table...");

    await pool.query(`
    CREATE TABLE likes (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        employee_id INT UNSIGNED NOT NULL,
        FOREIGN KEY (employee_id) REFERENCES employees(id),
        exercise_id INT UNSIGNED NOT NULL,
        FOREIGN KEY (exercise_id) REFERENCES exercises(id)
        );
        `);

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

initDB();
