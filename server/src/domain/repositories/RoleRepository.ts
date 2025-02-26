import Role from "../entities/Role";

export interface RoleRepository {
  getRoleByUserId(userId: number): Role[];
  getPermissionsByRole(roleId: number): string[];
}
