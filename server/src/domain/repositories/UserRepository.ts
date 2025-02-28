import { UserRead, UserWrite } from "../entities/User";

export interface UserRepository {
  findAll(pageNumber: number): Promise<UserRead[]>;
  find(userId: number): Promise<UserRead>;
  create(user: UserWrite): Promise<void>;
  update(user: UserWrite): Promise<void>;
  delete(userId: number): Promise<void>;
}
