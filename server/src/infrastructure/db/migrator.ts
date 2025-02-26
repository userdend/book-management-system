import { Umzug, JSONStorage } from "umzug";
import path from "path";
import db from "./database";

const umzug = new Umzug({
  migrations: {
    glob: path.join(__dirname, "migrations", "*.ts"),
    resolve: ({ name, path, context }) => {
      const migration = require(String(path));
      return {
        name,
        up: async () => migration.up({ context }),
        down: async () => migration.down({ context }),
      };
    },
  },
  context: db,
  storage: new JSONStorage({
    path: path.join(__dirname, "migration.json"),
  }),
  logger: console,
});

export default umzug;
