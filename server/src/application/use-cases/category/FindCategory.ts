import Category from "../../../domain/entities/Category";
import { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export default class FindCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(categoryId: number): Promise<Category> {
    return this.categoryRepository.find(categoryId);
  }
}
