import Category from "../../../domain/entities/Category";
import { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export default class CreateCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(name: string): Promise<void> {
    const category = new Category(0, name);
    return this.categoryRepository.create(category);
  }
}
