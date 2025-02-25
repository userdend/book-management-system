import { Request, Response } from "express";
import BookService from "../../../application/services/BookService";

export default class BookController {
  private bookService = new BookService();

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
}
