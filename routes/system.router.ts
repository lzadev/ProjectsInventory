import express, { Router } from "express";
import { getAll, create } from "../controllers/system.controller";

const systemRouter: Router = express.Router();

systemRouter.get("/", getAll);
systemRouter.post("/", create);

export default systemRouter;
