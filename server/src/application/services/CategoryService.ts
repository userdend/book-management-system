import FindAllCategories from "../../domain/use-cases/category/FindAllCategories";
import FindCategory from "../../domain/use-cases/category/FindCategory";
import CreateCategory from "../../domain/use-cases/category/CreateCategory";
import UpdateCategory from "../../domain/use-cases/category/UpdateCategory";
import DeleteCategory from "../../domain/use-cases/category/DeleteCategory";
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
    this.findAllCategories.execute();
  }

  async getCategory(categoryId: number) {
    this.findCategory.execute(categoryId);
  }

  async registerCategory(name: string) {
    this.createCategory.execute(name);
  }

  async editCategory(id: number, name: string) {
    this.updateCategory.execute(id, name);
  }

  async removeCategory(categoryId: number) {
    this.deleteCategory.execute(categoryId);
  }
}
