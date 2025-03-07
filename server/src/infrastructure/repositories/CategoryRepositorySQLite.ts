import Category from "../../domain/entities/Category";
import { CategoryRepository } from "../../domain/repositories/CategoryRepository";
import db from "../db/database";

export default class CategoryRepositorySQLite implements CategoryRepository {
  async findAll(): Promise<Category[]> {
    return db.prepare(`SELECT * FROM categories`).all() as Category[];
  }

  async find(categoryId: number): Promise<Category> {
    const stmt = db.prepare(`SELECT * FROM categories WHERE id = ?`);
    const row: Category = (stmt.get(categoryId) as Category) || undefined;

    if (!row) {
      throw new Error(`Category with ID ${categoryId} not found.`);
    }

    return row;
  }

  async create(category: Category): Promise<void> {
    const stmt = db.prepare(`INSERT INTO categories (name) VALUES (?)`);
    stmt.run(category.name);
  }

  async update(category: Category): Promise<void> {
    const stmt = db.prepare(`UPDATE categories SET name = ? WHERE id = ?`);
    stmt.run(category.name, category.id);
  }

  async delete(categoryId: number): Promise<void> {
    const stmt = db.prepare(`DELETE FROM categories WHERE id = ?`);
    stmt.run(categoryId);
  }
}
