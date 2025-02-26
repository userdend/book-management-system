import Book from "../entities/Book";
import { BookRepository } from "../repositories/BookRepository";

export default class FindBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(isbn: string): Promise<Book> {
    return this.bookRepository.find(isbn);
  }
}
