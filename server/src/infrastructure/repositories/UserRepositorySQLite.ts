import db from "../db/database";
import { UserRead, UserWrite } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserRepositorySQLite implements UserRepository {
  async findAll(pageNumber: number): Promise<UserRead[]> {
    const limit = 10;
    const offset = (pageNumber - 1) * limit;
    const stmt = db.prepare(`SELECT * FROM users LIMIT ? OFFSET ?`);
    const info = stmt.all(limit, offset);
    return info.map(
      (user: any) =>
        new UserRead(user.id, user.name, user.email, user.created_at)
    );
  }

  async find(userId: number): Promise<UserRead> {
    const stmt = db.prepare(`SELECT * FROM users WHERE id = ?`);
    const info: any = stmt.get(userId);
    return new UserRead(info.id, info.name, info.email, info.created_at);
  }

  async create(user: UserWrite): Promise<void> {
    const stmt = db.prepare(
      `INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, ?)`
    );
    const info = stmt.run(
      user.name,
      user.email,
      user.passwordHash,
      user.created_at
    );

    const stmt_ = db.prepare(
      `INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)`
    );
    stmt_.run(info.lastInsertRowid as number, 3);
  }

  async update(user: UserWrite): Promise<void> {
    const stmt = db.prepare(
      `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`
    );
    stmt.run(user.name, user.email, user.passwordHash, user.id);
  }

  async delete(userId: number): Promise<void> {
    const stmt = db.prepare(`DELETE FROM users WHERE id = ?`);
    stmt.run(userId);
  }
}
