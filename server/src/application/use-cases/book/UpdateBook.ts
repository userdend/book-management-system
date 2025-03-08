import Book from "../../../domain/entities/Book";
import { BookRepository } from "../../../domain/repositories/BookRepository";

export default class UpdateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(
    id: number,
    title: string,
    isbn: string,
    author: string,
    publisher: string,
    category: string,
    rack: string,
    noOfCopy: number,
    updatedOn: Date
  ): Promise<void> {
    const book = new Book(
      id,
      title,
      isbn,
      author,
      publisher,
      category,
      rack,
      noOfCopy,
      updatedOn
    );
    this.bookRepository.update(book);
  }
}
