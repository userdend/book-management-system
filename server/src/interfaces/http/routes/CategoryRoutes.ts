import { Router } from "express";
import CategoryController from "../controller/CategoryController";
import { authorize } from "../middleware/rbac";

const router = Router();
const categoryController = new CategoryController();

router.get("/categories", categoryController.getAll);
router.get("/category/:id", categoryController.get);
router.post(
  "/categories",
  authorize("create_category"),
  categoryController.register
);
router.put(
  "/category",
  authorize("update_category"),
  categoryController.update
);
router.delete(
  "/category",
  authorize("delete_category"),
  categoryController.remove
);

export default router;
