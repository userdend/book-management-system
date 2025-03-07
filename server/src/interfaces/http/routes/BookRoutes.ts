import { Router } from "express";
import BookController from "../controller/BookController";
import { authorize } from "../middleware/rbac";

const router = Router();
const bookController = new BookController();

router.get("/books", bookController.getAll);
router.get("/book/:id", bookController.get);
router.post("/books", authorize("create_book"), bookController.register);
router.put("/book", authorize("update_book"), bookController.update);
router.delete("/book", authorize("delete_book"), bookController.remove);

export default router;
