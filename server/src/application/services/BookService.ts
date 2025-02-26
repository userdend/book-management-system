import FindAllBooks from "../../domain/use-cases/FindAllBooks";
import FindBook from "../../domain/use-cases/FindBook";
import CreateBook from "../../domain/use-cases/CreateBook";
import BookRepositorySQLite from "../../infrastructure/repositories/BookRepositorySQLite";

export default class BookService {
  private findAllBooks: FindAllBooks;
  private findBook: FindBook;
  private createBook: CreateBook;

  constructor() {
    const bookRepository = new BookRepositorySQLite();
    this.findAllBooks = new FindAllBooks(bookRepository);
    this.findBook = new FindBook(bookRepository);
    this.createBook = new CreateBook(bookRepository);
  }

  async getAllBooks() {
    return this.findAllBooks.execute();
  }

  async getBook(isbn: string) {
    return this.findBook.execute(isbn);
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
