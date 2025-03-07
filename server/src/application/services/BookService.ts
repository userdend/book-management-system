import FindAllBooks from "../use-cases/book/FindAllBooks";
import FindBook from "../use-cases/book/FindBook";
import CreateBook from "../use-cases/book/CreateBook";
import UpdateBook from "../use-cases/book/UpdateBook";
import DeleteBook from "../use-cases/book/DeleteBook";
import BookRepositorySQLite from "../../infrastructure/repositories/BookRepositorySQLite";

export default class BookService {
  private findAllBooks: FindAllBooks;
  private findBook: FindBook;
  private createBook: CreateBook;
  private updateBook: UpdateBook;
  private deleteBook: DeleteBook;

  constructor() {
    const bookRepository = new BookRepositorySQLite();
    this.findAllBooks = new FindAllBooks(bookRepository);
    this.findBook = new FindBook(bookRepository);
    this.createBook = new CreateBook(bookRepository);
    this.updateBook = new UpdateBook(bookRepository);
    this.deleteBook = new DeleteBook(bookRepository);
  }

  async getAllBooks(pageNumber: number) {
    return this.findAllBooks.execute(pageNumber);
  }

  async getBook(bookId: number) {
    return this.findBook.execute(bookId);
  }

  async registerBook(
    title: string,
    isbn: string,
    author: string,
    publisher: string,
    category: string,
    rack: string,
    noOfCopy: number,
    updatedOn: Date
  ) {
    this.createBook.execute(
      title,
      isbn,
      author,
      publisher,
      category,
      rack,
      noOfCopy,
      updatedOn
    );
  }

  async editBook(
    id: number,
    title: string,
    isbn: string,
    author: string,
    publisher: string,
    category: string,
    rack: string,
    noOfCopy: number,
    updatedOn: Date
  ) {
    this.updateBook.execute(
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
  }

  async removeBook(bookId: number) {
    this.deleteBook.execute(bookId);
  }
}
