import { UserRepository } from "../../repositories/UserRepository";

export default class DeleteUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: number): Promise<void> {
    this.userRepository.delete(userId);
  }
}
