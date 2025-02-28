import CreateUser from "../../domain/use-cases/user/CreateUser";
import DeleteUser from "../../domain/use-cases/user/DeleteUser";
import FindAllUsers from "../../domain/use-cases/user/FindAllUsers";
import FindUser from "../../domain/use-cases/user/FindUser";
import UpdateUser from "../../domain/use-cases/user/UpdateUser";
import { UserRepositorySQLite } from "../../infrastructure/repositories/UserRepositorySQLite";

export default class UserService {
  private findAllUsers: FindAllUsers;
  private findUser: FindUser;
  private createUser: CreateUser;
  private updateUser: UpdateUser;
  private deleteUser: DeleteUser;

  constructor() {
    const userRepository = new UserRepositorySQLite();
    this.findAllUsers = new FindAllUsers(userRepository);
    this.findUser = new FindUser(userRepository);
    this.createUser = new CreateUser(userRepository);
    this.updateUser = new UpdateUser(userRepository);
    this.deleteUser = new DeleteUser(userRepository);
  }

  async getAllUsers(pageNumber: number) {
    return this.findAllUsers.execute(pageNumber);
  }

  async getUser(userId: number) {
    return this.findUser.execute(userId);
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
    created_at: Date
  ) {
    this.createUser.execute(name, email, password, created_at);
  }

  async editUser(
    id: number,
    name: string,
    email: string,
    password: string,
    created_at: Date
  ) {
    this.updateUser.execute(id, name, email, password, created_at);
  }

  async removeUser(userId: number) {
    this.deleteUser.execute(userId);
  }
}
