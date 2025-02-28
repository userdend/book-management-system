import { UserWrite } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

export default class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(
    name: string,
    email: string,
    password: string,
    created_at: Date
  ): Promise<void> {
    const user = new UserWrite(0, name, email, password, created_at);
    this.userRepository.create(user);
  }
}
