import { UserWrite } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

export default class UpdateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(
    id: number,
    name: string,
    email: string,
    password: string,
    created_at: Date
  ): Promise<void> {
    const user = new UserWrite(id, name, email, password, created_at);
    this.userRepository.update(user);
  }
}
