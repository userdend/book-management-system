import { Request, Response } from "express";
import BookService from "../../../application/services/BookService";

export default class BookController {
  private bookService = new BookService();

  getAll = async (req: Request, res: Response) => {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(201).json(books);
    } catch (error) {
      res.status(400).json({ error: "Books retrieval failed." });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const { isbn } = req.params;
      const book = await this.bookService.getBook(isbn);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: "Book retrieval failed." });
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      const {
        title,
        isbn,
        author,
        pulisher,
        category,
        rack,
        noOfCopy,
        updatedOn,
      } = req.body;
      const book = await this.bookService.registerBook(
        title,
        isbn,
        author,
        pulisher,
        category,
        rack,
        noOfCopy,
        updatedOn
      );
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: "Book creation failed." });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const { isbn } = req.body;
      const result = await this.bookService.removeBook(isbn);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: "Book removal failed." });
    }
  };
}
