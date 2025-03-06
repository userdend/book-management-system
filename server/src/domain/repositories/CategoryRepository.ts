import Category from "../entities/Category";

export interface CategoryRepository {
  findAll(): Promise<Category[]>;
  find(categoryId: number): Promise<Category>;
  create(category: Category): Promise<void>;
  update(category: Category): Promise<void>;
  delete(categoryId: number): Promise<void>;
}
