import { Request, Response } from "express";
import CategoryService from "../../../application/services/CategoryService";

export default class CategoryController {
  private categoryService = new CategoryService();

  getAll = async (req: Request, res: Response) => {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(201).json(categories);
    } catch (error) {
      res.status(400).json({ error: "Categories retrieval failed." });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const category = await this.categoryService.getCategory(parseInt(id));
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: "Category retrieval failed." });
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      const { name } = req.body.category;
      await this.categoryService.registerCategory(name);
      res.status(201).json({ message: "Category creation success." });
    } catch (error) {
      res.status(400).json({ error: "Category creation failed." });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id, name } = req.body.category;
      await this.categoryService.editCategory(id, name);
      res.status(201).json({ message: "Category updating success." });
    } catch (error) {
      res.status(400).json({ error: "Category updating failed." });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const { id } = req.body.category;
      await this.categoryService.removeCategory(id);
      res.status(201).json({ message: "Category removal success." });
    } catch (error) {
      res.status(400).json({ error: "Category removal failed." });
    }
  };
}
