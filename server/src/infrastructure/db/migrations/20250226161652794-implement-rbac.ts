import { Database } from "better-sqlite3";
module.exports = {
  up: async ({ context: db }: { context: Database }) => {
    db.exec(`
            CREATE TABLE IF NOT EXISTS roles (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT UNIQUE NOT NULL
            );
        
            CREATE TABLE IF NOT EXISTS permissions (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT UNIQUE NOT NULL
            );
        
            CREATE TABLE IF NOT EXISTS user_roles (
              user_id INTEGER NOT NULL,
              role_id INTEGER NOT NULL,
              PRIMARY KEY (user_id, role_id)
            );
        
            CREATE TABLE IF NOT EXISTS role_permissions (
              role_id INTEGER NOT NULL,
              permission_id INTEGER NOT NULL,
              PRIMARY KEY (role_id, permission_id)
            );
          `);
  },
  down: async ({ context: db }: { context: Database }) => {
    db.exec(`
      DROP TABLE IF EXISTS role_permissions;
      DROP TABLE IF EXISTS user_roles;
      DROP TABLE IF EXISTS permissions;
      DROP TABLE IF EXISTS roles;
    `);
  },
};
