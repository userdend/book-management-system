import { Router } from "express";
import BookController from "../controller/BookController";
import { authorize } from "../middleware/rbac";

const router = Router();
const bookController = new BookController();

router.get("/books", authorize("view_book"), bookController.getAll);
router.get("/book/:isbn", authorize("view_book"), bookController.get);
router.post("/books", authorize("create_book"), bookController.register);
router.put("/book", authorize("edit_book"), bookController.update);
router.delete("/book", authorize("delete_book"), bookController.remove);

export default router;
