import db from "../db/database";
import Book from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";

export default class BookRepositorySQLite implements BookRepository {
  async findAll(pageNumber: number): Promise<Book[]> {
    const limit = 5;
    const offset = (pageNumber - 1) * limit;
    const rows = db
      .prepare("SELECT * FROM books LIMIT ? OFFSET ?")
      .all(limit, offset);
    return rows.map(
      (row: any) =>
        new Book(
          row.id,
          row.title,
          row.isbn,
          row.author,
          row.publisher,
          row.category,
          row.rack,
          row.noOfCopy,
          row.updatedOn
        )
    );
  }

  async find(bookId: number): Promise<Book> {
    const stmt = db.prepare("SELECT * FROM books WHERE id = ?");
    const book: any = stmt.get(bookId);
    return new Book(
      book.id,
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

  async create(book: Book): Promise<void> {
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
      book.updatedOn,
      book.id
    );
  }

  async delete(bookId: number): Promise<void> {
    const stmt = db.prepare("DELETE FROM books WHERE id = ?");
    stmt.run(bookId);
  }
}
