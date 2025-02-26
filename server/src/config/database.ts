import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
  path: process.env.DB_PATH || "bms-db.sqlite",
};
