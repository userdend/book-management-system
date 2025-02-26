import { Database } from "better-sqlite3";
import Role from "../../domain/entities/Role";
import { RoleRepository } from "../../domain/repositories/RoleRepository";

export class RoleRepositorySQLite implements RoleRepository {
  constructor(private db: Database) {}

  getRoleByUserId(userId: number): Role[] {
    return this.db
      .prepare(
        `SELECT r.* FROM roles r JOIN user_roles ur ON r.id = ur.role_id WHERE ur.user_id = ?`
      )
      .all(userId) as Role[];
  }

  getPermissionsByRole(roleId: number): string[] {
    const rows = this.db
      .prepare(
        `SELECT p.name FROM permissions p JOIN role_permissions rp ON p.id = rp.permission_id`
      )
      .all(roleId);
    return rows.map((row: any) => row.name);
  }
}
