import Book from "../entities/Book";

export interface BookRepository {
  findAll(): Promise<Book[]>;
  find(isbn: string): Promise<Book>;
  create(book: Book): Promise<Book>;
}
