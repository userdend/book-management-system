import { Router } from "express";
import BookController from "../controller/BookController";

const router = Router();
const bookController = new BookController();

router.get("/books", bookController.getAll);
router.post("/books", bookController.register);

export default router;
