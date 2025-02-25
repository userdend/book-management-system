import { Router } from "express";
import BookController from "../controller/BookController";

const router = Router();
const bookController = new BookController();

router.post("/books", bookController.register);

export default router;
