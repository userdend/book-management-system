import fs from "fs";
import path from "path";

const name: string = process.argv[2];
if (!name) {
  console.error("Please provide a migration name.");
  process.exit(1);
}

const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "");
const fileName = `${timestamp}-${name}.ts`;
const filePath = path.join(__dirname, "migrations", fileName);

const template = `
    import { Database } from 'better-sqlite3';
    module.exports = {
        up: async ({ context: db }: { context: Database }) => {
          try{
          }
          catch(error: any) {
            console.error(error.message);
          }
        },
        down: async ({ context: db }: { context: Database }) => {
          try{
          }
          catch(error: any) {
            console.error(error.message);
          }
        },
    };
`;

fs.writeFileSync(filePath, template.trim());
console.log(`Migration file created: ${filePath}`);
