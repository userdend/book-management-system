import { Database } from "better-sqlite3";
module.exports = {
  up: async ({ context: db }: { context: Database }) => {
    try {
      db.exec(
        `
        CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP
              );
              
        CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
        `
      );
    } catch (error: any) {
      console.error(error.message);
    }
  },
  down: async ({ context: db }: { context: Database }) => {
    try {
      db.prepare(`DROP TABLE IF EXISTS users;`).run();
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
