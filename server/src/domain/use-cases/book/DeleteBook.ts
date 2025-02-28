import { BookRepository } from "../../repositories/BookRepository";

export default class DeleteBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(bookId: number): Promise<void> {
    this.bookRepository.delete(bookId);
  }
}
