import { Router } from "express";
import UserController from "../controller/UserController";
import { authorize } from "../middleware/rbac";

const router = Router();
const userController = new UserController();

router.get("/users", authorize("view_user"), userController.getAll);
router.get("/user/:isbn", authorize("view_user"), userController.get);
router.post("/users", authorize("create_user"), userController.register);
router.put("/user", authorize("edit_user"), userController.update);
router.delete("/user", authorize("delete_user"), userController.remove);

export default router;
