import { Router } from "express";
import BookController from "../controller/BookController";

const router = Router();
const bookController = new BookController();

router.get("/books", bookController.getAll);
router.get("/book/:isbn", bookController.get);
router.post("/books", bookController.register);
router.delete("/book", bookController.remove);

export default router;
