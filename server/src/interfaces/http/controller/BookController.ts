import { Request, Response } from "express";
import BookService from "../../../application/services/BookService";

export default class BookController {
  private bookService = new BookService();

  getAll = async (req: Request, res: Response) => {
    try {
      const { page } = req.query;
      const books = await this.bookService.getAllBooks(Number(page) || 1);
      res.status(201).json(books);
    } catch (error) {
      res.status(400).json({ error: "Books retrieval failed." });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const book = await this.bookService.getBook(parseInt(id));
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
        publisher,
        category,
        rack,
        noOfCopy,
        updatedOn,
      } = req.body.book;
      await this.bookService.registerBook(
        title,
        isbn,
        author,
        publisher,
        category,
        rack,
        noOfCopy,
        updatedOn
      );
      res.status(201).json({ message: "Book creation success." });
    } catch (error) {
      res.status(400).json({ error: "Book creation failed." });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const {
        id,
        title,
        isbn,
        author,
        publisher,
        category,
        rack,
        noOfCopy,
        updatedOn,
      } = req.body.book;
      await this.bookService.editBook(
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
      res.status(201).json({ message: "Book updating success." });
    } catch (error) {
      res.status(400).json({ error: "Book updating failed." });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const { id } = req.body.book;
      await this.bookService.removeBook(id);
      res.status(201).json({ message: "Book removal success." });
    } catch (error) {
      res.status(400).json({ error: "Book removal failed." });
    }
  };
}
