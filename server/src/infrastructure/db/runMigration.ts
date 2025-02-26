import umzug from "./migrator";

(async () => {
  await umzug.up();
  console.log(`The migration executed successfully.`);
})();
