import express, { Application } from "express";
import dotenv from "dotenv";
import projectRouter from "../routes/project.router";
import { ApiInventoryDataSource } from "../database/data-source";
import systemRouter from "../routes/system.router";

dotenv.config();

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.port = process.env.PORT || "3200";
    this.routes();
  }

  private routes(): void {
    this.app.use("/api/projects", projectRouter);
    this.app.use("/api/systems", systemRouter);
  }

  async start() {
    try {
      await ApiInventoryDataSource.initialize();
      this.app.listen(this.port, () =>
        console.log(`Sever running on port ${this.port}`)
      );
    } catch (error) {
      console.log("Error trying to connect with the database server", error);
    }

    // try {
    //   await connect(process.env.MONGO_URI || "");
    //   this.app.listen(this.port, () =>
    //     console.log(`Sever running on port ${this.port}`)
    //   );
    // } catch (error) {
    //   console.log("Error trying to connect with the server", error);
    // }
  }
}

export default Server;
