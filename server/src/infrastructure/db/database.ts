import Database from "better-sqlite3";
import { databaseConfig } from "../../config/database";

const db = new Database(databaseConfig.path);

db.pragma("foreign_keys = ON");

function createTable() {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  -- Primary key with auto-increment
      title TEXT NOT NULL,
      isbn TEXT NOT NULL UNIQUE,
      author TEXT NOT NULL,
      publisher TEXT NOT NULL,
      category TEXT NOT NULL,
      rack TEXT NOT NULL,
      noOfCopy INTEGER NOT NULL,
      updatedOn DATETIME DEFAULT CURRENT_TIMESTAMP
  );`
  ).run();

  db.prepare(
    `
  CREATE INDEX IF NOT EXISTS idx_books_isbn ON books (isbn);`
  ).run();
}

try {
  createTable();
  console.log(`Database and tables initialized successfully.`);
} catch (error) {
  console.log(`Error initializing database: `, error);
}

process.on("SIGINT", () => {
  db.close();
  console.log(`Database connection closed.`);
  process.exit(0);
});

export default db;
