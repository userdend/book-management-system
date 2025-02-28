import Book from "../entities/Book";

export interface BookRepository {
  findAll(pageNumber: number): Promise<Book[]>;
  find(bookId: number): Promise<Book>;
  create(book: Book): Promise<void>;
  update(book: Book): Promise<void>;
  delete(bookId: number): Promise<void>;
}
