import { BookRepository } from "../../repositories/BookRepository";

export default class DeleteBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(isbn: string): Promise<any> {
    return this.bookRepository.delete(isbn);
  }
}
