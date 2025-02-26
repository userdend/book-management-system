import db from "../db/database";
import Book from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";

export default class BookRepositorySQLite implements BookRepository {
  async findAll(): Promise<Book[]> {
    const rows = db.prepare("SELECT * FROM books").all();
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

  async find(isbn: string): Promise<Book> {
    const stmt = db.prepare("SELECT * FROM books WHERE isbn = ?");
    const book: any = stmt.get(isbn);
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

  async create(book: Book): Promise<Book> {
    const stmt = db.prepare(
      "INSERT INTO books (title, isbn, author, publisher, category, rack, noOfCopy, updatedOn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );
    const info = stmt.run(
      book.title,
      book.isbn,
      book.author,
      book.publisher,
      book.category,
      book.rack,
      book.noOfCopy,
      book.updatedOn
    );
    return new Book(
      info.lastInsertRowid as number,
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

  async update(book: Book): Promise<any> {
    const stmt = db.prepare(
      "UPDATE books SET title = ?, author = ?, publisher = ?, category = ?, rack = ?, noOfCopy = ?, updatedOn = CURRENT_TIMESTAMP WHERE isbn = ?"
    );
    const result = stmt.run(
      book.title,
      book.author,
      book.publisher,
      book.category,
      book.rack,
      book.noOfCopy,
      book.updatedOn,
      book.isbn
    );
    return result.changes;
  }

  async delete(isbn: string): Promise<any> {
    const stmt = db.prepare("DELETE FROM books WHERE isbn = ?");
    const result = stmt.run(isbn);
    return result.changes;
  }
}
