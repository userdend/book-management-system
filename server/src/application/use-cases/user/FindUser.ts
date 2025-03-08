import { UserRead } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export default class FindUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: number): Promise<UserRead> {
    return this.userRepository.find(userId);
  }
}
