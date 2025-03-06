import Category from "../../entities/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

export default class FindAllCategories {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }
}
