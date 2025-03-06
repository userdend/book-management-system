import { Database } from "better-sqlite3";
module.exports = {
  up: async ({ context: db }: { context: Database }) => {
    try {
      db.exec(`CREATE TABLE IF NOT EXISTS categories (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT UNIQUE NOT NULL
              )`);
    } catch (error: any) {
      console.error(error.message);
    }
  },
  down: async ({ context: db }: { context: Database }) => {
    try {
      db.exec(`DROP TABLE IF NOT EXISTS categories;`);
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
