import Book from "../../entities/Book";
import { BookRepository } from "../../repositories/BookRepository";

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
  ): Promise<any> {
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
    return this.bookRepository.update(book);
  }
}
