const { Pool } = require("pg");
const pool = new Pool({
  user: "Stutishah",
  host: "localhost",
  database: "Thewheeldeal",
  password: "",
  port: 5432,
});
module.exports = pool;