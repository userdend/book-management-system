import FindAllCategories from "../use-cases/category/FindAllCategories";
import FindCategory from "../use-cases/category/FindCategory";
import CreateCategory from "../use-cases/category/CreateCategory";
import UpdateCategory from "../use-cases/category/UpdateCategory";
import DeleteCategory from "../use-cases/category/DeleteCategory";
import CategoryRepositorySQLite from "../../infrastructure/repositories/CategoryRepositorySQLite";

export default class CategoryService {
  private findAllCategories: FindAllCategories;
  private findCategory: FindCategory;
  private createCategory: CreateCategory;
  private updateCategory: UpdateCategory;
  private deleteCategory: DeleteCategory;

  constructor() {
    const categoryRepository = new CategoryRepositorySQLite();
    this.findAllCategories = new FindAllCategories(categoryRepository);
    this.findCategory = new FindCategory(categoryRepository);
    this.createCategory = new CreateCategory(categoryRepository);
    this.updateCategory = new UpdateCategory(categoryRepository);
    this.deleteCategory = new DeleteCategory(categoryRepository);
  }

  async getAllCategories() {
    return this.findAllCategories.execute();
  }

  async getCategory(categoryId: number) {
    return this.findCategory.execute(categoryId);
  }

  async registerCategory(name: string) {
    return this.createCategory.execute(name);
  }

  async editCategory(id: number, name: string) {
    return this.updateCategory.execute(id, name);
  }

  async removeCategory(categoryId: number) {
    return this.deleteCategory.execute(categoryId);
  }
}
