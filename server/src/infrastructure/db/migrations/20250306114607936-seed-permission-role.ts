import { Database } from "better-sqlite3";

module.exports = {
  up: async ({ context: db }: { context: Database }) => {
    try {
      const insertPermission = db.prepare(
        "INSERT INTO permissions (name) VALUES (?)"
      );
      const insertRolePermission = db.prepare(
        "INSERT INTO role_permissions (role_id, permission_id) VALUES (?, ?)"
      );

      // Book related.
      insertPermission.run("view_category");
      insertPermission.run("create_category");
      insertPermission.run("update_category");
      insertPermission.run("delete_category");

      const adminRole = (
        db.prepare(`SELECT id FROM roles WHERE name = 'admin'`).get() as {
          id: number;
        }
      )?.id;
      const permissions = db.prepare(`SELECT id FROM permissions`).all();

      permissions.forEach((perm: any) => {
        insertRolePermission.run(adminRole, perm.id);
      });
    } catch (error: any) {
      console.error(`Failed to migrate: ${error.message}`);
    }
  },
  down: async ({ context: db }: { context: Database }) => {
    try {
      db.exec(`
        DELETE FROM role_permissions;
        DELETE FROM permissions;
        DELETE FROM roles;
        `);
    } catch (error: any) {
      console.error(`Failed to rollback migration: ${error.message}`);
    }
  },
};
