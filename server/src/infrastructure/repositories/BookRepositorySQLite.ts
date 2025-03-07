import db from "../db/database";
import Book from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";

export default class BookRepositorySQLite implements BookRepository {
  async findAll(pageNumber: number): Promise<Book[]> {
    const limit = 5;
    const offset = (pageNumber - 1) * limit;
    return db
      .prepare("SELECT * FROM books LIMIT ? OFFSET ?")
      .all(limit, offset) as Book[];
  }

  async find(bookId: number): Promise<Book> {
    const stmt = db.prepare("SELECT * FROM books WHERE id = ?");
    const row: Book = (stmt.get(bookId) as Book) || undefined;

    if (!row) {
      throw new Error(`Book with ID ${bookId} not found.`);
    }

    return row;
  }

  async create(book: Book): Promise<void> {
    // Task: Insert if ISBN is not exists.
    const stmt = db.prepare(
      "INSERT INTO books (title, isbn, author, publisher, category, rack, noOfCopy, updatedOn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );
    stmt.run(
      book.title,
      book.isbn,
      book.author,
      book.publisher,
      book.category,
      book.rack,
      book.noOfCopy,
      book.updatedOn
    );
  }

  async update(book: Book): Promise<void> {
    const stmt = db.prepare(
      "UPDATE books SET title = ?, isbn = ?, author = ?, publisher = ?, category = ?, rack = ?, noOfCopy = ?, updatedOn = CURRENT_TIMESTAMP WHERE id = ?"
    );
    stmt.run(
      book.title,
      book.isbn,
      book.author,
      book.publisher,
      book.category,
      book.rack,
      book.noOfCopy,
      book.id
    );
  }

  async delete(bookId: number): Promise<void> {
    const stmt = db.prepare("DELETE FROM books WHERE id = ?");
    stmt.run(bookId);
  }
}
