import { Database } from "better-sqlite3";
module.exports = {
  up: async ({ context: db }: { context: Database }) => {
    try {
      // Seed users.
      const insertAdmin = db.prepare(`
        INSERT INTO users (name, email, password, created_at)
        VALUES (?, ?, ?, ?);
        `);
      insertAdmin.run(
        "admin",
        "admin@bms.com",
        "1234",
        new Date().toISOString()
      );

      // Seed user_roles.
      const adminId = (
        db.prepare(`SELECT id FROM users WHERE name = 'admin'`).get() as {
          id: number;
        }
      )?.id;

      const insertAdminRole = db.prepare(
        "INSERT INTO user_roles (user_id, role_id) VALUES (?, ?);"
      );
      insertAdminRole.run(adminId, 2);
    } catch (error: any) {
      console.error(error.message);
    }
  },
  down: async ({ context: db }: { context: Database }) => {
    try {
      db.exec(`
        DELETE FROM users;
        DELETE FROM user_roles;
        `);
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
