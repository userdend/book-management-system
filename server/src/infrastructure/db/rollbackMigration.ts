import umzug from "./migrator";

(async () => {
  await umzug.down();
  console.log(`Rolled back to the latest migration.`);
})();
