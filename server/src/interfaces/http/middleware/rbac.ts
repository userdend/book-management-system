import { Request, Response, NextFunction } from "express";
import { RoleRepositorySQLite } from "../../../infrastructure/repositories/RoleRepositorySQLite";
import db from "../../../infrastructure/db/database";

const roleRepository = new RoleRepositorySQLite(db);

export const authorize = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body.user;

    if (!id) {
      res.status(401).json({ error: "Unauthorized." });
      return;
    }

    const roles = roleRepository.getRoleByUserId(id);

    const permissions = roles.flatMap((role) =>
      roleRepository.getPermissionsByRole(role.id)
    );

    if (!permissions.includes(requiredPermission)) {
      res.status(403).json({ error: "Forbidden: Insufficient permissions." });
      return;
    }

    next();
  };
};
