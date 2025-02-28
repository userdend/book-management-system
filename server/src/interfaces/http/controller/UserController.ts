import { Request, Response } from "express";
import UserService from "../../../application/services/UserService";

export default class BookController {
  private userService = new UserService();

  getAll = async (req: Request, res: Response) => {
    try {
      const { page } = req.body;
      const users = await this.userService.getAllUsers(page);
      res.status(201).json(users);
    } catch (error) {
      res.status(400).json({ error: "Users retrieval failed." });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(parseInt(id));
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "User retrieval failed." });
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      const { name, email, password, created_at } = req.body.user;
      await this.userService.registerUser(name, email, password, created_at);
      res.status(201).json({ message: "User registration success." });
    } catch (error) {
      res.status(400).json({ error: "User registration failed." });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id, name, email, password, created_at } = req.body.user;
      await this.userService.editUser(id, name, email, password, created_at);
      res.status(201).json({ message: "User updating success." });
    } catch (error) {
      res.status(400).json({ error: "User updating failed." });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const { id } = req.body.user;
      await this.userService.removeUser(id);
      res.status(201).json({ message: "User removal success." });
    } catch (error) {
      res.status(400).json({ error: "User removal failed." });
    }
  };
}
