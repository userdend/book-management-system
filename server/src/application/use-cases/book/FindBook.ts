import Book from "../../../domain/entities/Book";
import { BookRepository } from "../../../domain/repositories/BookRepository";

export default class FindBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: number): Promise<Book> {
    return this.bookRepository.find(bookId);
  }
}
