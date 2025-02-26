import Book from "../../entities/Book";
import { BookRepository } from "../../repositories/BookRepository";

export default class FindAllBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }
}
