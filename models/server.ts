import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3200";
  }

  start(): void {
    this.app.listen(this.port, () =>
      console.log(`Sever running on port ${this.port}`)
    );
  }
}

export default Server;
