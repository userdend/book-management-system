import Book from "../../entities/Book";
import { BookRepository } from "../../repositories/BookRepository";

export default class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(
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
      0,
      title,
      isbn,
      author,
      publisher,
      category,
      rack,
      noOfCopy,
      updatedOn
    );
    this.bookRepository.create(book);
  }
}
