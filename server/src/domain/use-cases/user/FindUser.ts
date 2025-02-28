import { UserRead } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

export default class FindUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: number): Promise<UserRead> {
    return this.userRepository.find(userId);
  }
}
