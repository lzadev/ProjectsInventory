import express, { Application } from "express";
import dotenv from "dotenv";
import connect from "../database/connection";
import projectRouter from "../routes/project.router";

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
  }

  async start() {
    try {
      await connect(process.env.MONGO_URI || "");
      this.app.listen(this.port, () =>
        console.log(`Sever running on port ${this.port}`)
      );
    } catch (error) {
      console.log("Error trying to connect with the server", error);
    }
  }
}

export default Server;
