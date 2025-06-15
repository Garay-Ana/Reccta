// backend/db.js
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "bpovcb9nrlovxdfwk58d-mysql.services.clever-cloud.com",
  user: "ulbvcrnceyhfufsz",
  password: "Rsri9MOW0ocGMWdExoGfd",
  database: "bpovcb9nrlovxdfwk58d",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error conectando a la base de datos:", err.message);
    return;
  }
  console.log("✅ Conexión a MySQL en Clever Cloud exitosa");
});

module.exports = db;
