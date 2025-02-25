import CreateBook from "../../domain/use-cases/CreateBook";
import BookRepositorySQLite from "../../infrastructure/repositories/BookRepositorySQLite";

export default class BookService {
  private createBook: CreateBook;

  constructor() {
    const bookRepository = new BookRepositorySQLite();
    this.createBook = new CreateBook(bookRepository);
  }

  async registerBook(
    title: string,
    isbn: string,
    author: string,
    pulisher: string,
    category: string,
    rack: string,
    noOfCopy: number,
    updatedOn: Date
  ) {
    return this.createBook.execute(
      title,
      isbn,
      author,
      pulisher,
      category,
      rack,
      noOfCopy,
      updatedOn
    );
  }
}
