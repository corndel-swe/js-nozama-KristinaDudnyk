import knex from "knex";
import { fileURLToPath } from "url";

const path = new URL("./db.sqlite", import.meta.url);

const db = knex({
  client: "sqlite3",
  connection: { filename: fileURLToPath(path) },
  useNullAsDefault: true,
});

// const query = "SELECT * FROM USERS;";

// const result = await db.raw(query);
// console.log(result.slice(2, 5));

export default db;
