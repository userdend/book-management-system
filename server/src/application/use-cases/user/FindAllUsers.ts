import { UserRead } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export default class FindAllUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(pageNumber: number): Promise<UserRead[]> {
    return this.userRepository.findAll(pageNumber);
  }
}
