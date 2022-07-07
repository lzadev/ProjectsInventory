import express, { Router } from "express";
import { create, getAll, getById } from "../controllers/project.controller";

const projectRouter: Router = express.Router();

projectRouter.get("/", getAll);
projectRouter.get("/:projectId", getById);
projectRouter.post("/", create);

export default projectRouter;
