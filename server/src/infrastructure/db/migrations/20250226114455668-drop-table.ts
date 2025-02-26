import { Database } from "better-sqlite3";
module.exports = {
  up: async ({ context: db }: { context: Database }) => {
    db.prepare("DROP TABLE books").run();
  },
  down: async ({ context: db }: { context: Database }) => {
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
  },
};
