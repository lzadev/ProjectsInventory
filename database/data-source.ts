import { DataSource } from "typeorm";
import { ApiAppMardom } from "../models/ApiMardom";
import { System } from "../models/System";

export const ApiInventoryDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "123456**",
  database: "SystemInventory",
  logging: true,
  synchronize: true,
  entities: [ApiAppMardom, System],
  options: { encrypt: false },
});
