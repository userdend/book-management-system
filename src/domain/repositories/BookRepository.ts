import Book from "../entities/Book";

export interface BookRepository {
  create(book: Book): Promise<Book>;
  findAll(): Promise<Book[]>;
}
