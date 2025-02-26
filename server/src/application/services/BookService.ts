import FindAllBooks from "../../domain/use-cases/book/FindAllBooks";
import FindBook from "../../domain/use-cases/book/FindBook";
import CreateBook from "../../domain/use-cases/book/CreateBook";
import UpdateBook from "../../domain/use-cases/book/UpdateBook";
import DeleteBook from "../../domain/use-cases/book/DeleteBook";
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
    publisher: string,
    category: string,
    rack: string,
    noOfCopy: number,
    updatedOn: Date
  ) {
    return this.createBook.execute(
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
    return this.updateBook.execute(
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

  async removeBook(isbn: string) {
    return this.deleteBook.execute(isbn);
  }
}
