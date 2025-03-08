import { CategoryRepository } from "../../../domain/repositories/CategoryRepository";

export default class DeleteCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(categoryId: number): Promise<void> {
    return this.categoryRepository.delete(categoryId);
  }
}
