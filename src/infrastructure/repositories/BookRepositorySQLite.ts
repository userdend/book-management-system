import { BookRepository } from "../../domain/repositories/BookRepository";
import Book from "../../domain/entities/Book";
import db from "../db/database";

export default class BookRepositorySQLite implements BookRepository {
  async create(book: Book): Promise<Book> {
    const stmt = db.prepare("");
    const info = stmt.run();
    return new Book(
      info.lastInsertRowid as number,
      book.title,
      book.isbn,
      book.author,
      book.pulisher,
      book.category,
      book.rack,
      book.noOfCopy,
      book.updatedOn
    );
  }

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
}
