import Category from "../../../domain/entities/Category";
import { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export default class UpdateCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: number, name: string): Promise<void> {
    const category = new Category(id, name);
    return this.categoryRepository.update(category);
  }
}
