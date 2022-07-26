import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "budget_db",
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
});

export default PostgresDataSource;
