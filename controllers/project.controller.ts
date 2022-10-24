import { Request, Response } from "express";
import mongoose from "mongoose";
import { ApiInventoryDataSource } from "../database/data-source";
import { ApiAppMardom } from "../models/ApiMardom";

import Project from "../models/Project";

const apiAppMardomRepository =
  ApiInventoryDataSource.getRepository(ApiAppMardom);

export const getAll = async (req: Request, res: Response) => {
  try {
    const projects = await apiAppMardomRepository.find();
    res.status(200).json({
      total: projects.length,
      data: projects,
      message: "",
      error: false,
      errorMessage: null,
    });
  } catch (error) {
    res.status(500).json({
      total: 0,
      data: null,
      message: "",
      error: true,
      errorMessage: "An error has ocurred. Try it again or later",
    });
  }
};

export const getById = async (req: Request, res: Response) => {
  const projectId = req.params.projectId;

  try {
    const project = await Project.findById(projectId);
    if (project) {
      res
        .status(200)
        .json({ total: 1, data: project, error: false, errorMessage: null });
    } else {
      res.status(400).json({
        tatal: 0,
        data: null,
        message: "",
        error: true,
        errorMessage: `Not project found with id ${projectId}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      total: 0,
      data: null,
      message: "",
      error: true,
      errorMessage: "An error has ocurred. Try it again or later",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  const {
    name,
    description,
    devServer,
    qaServer,
    uatServer,
    prodServer,
    isMicroservice,
    isMadeWithBoilerplate,
    framework,
    frameworkVersion,
    operation,
  } = req.body;

  try {
    const project = new Project({
      _id: new mongoose.Types.ObjectId(),
      name,
      description,
      devServer,
      qaServer,
      uatServer,
      prodServer,
      isMicroservice,
      isMadeWithBoilerplate,
      framework,
      frameworkVersion,
      operation,
      isActive: true,
    });

    await project.save();
    res.status(200).json({
      total: 1,
      data: project,
      message: "project created",
      error: false,
      errorMessage: "",
    });
  } catch (error) {
    res.status(500).json({
      total: 0,
      data: null,
      message: "",
      error: true,
      errorMessage: "An error has ocurred. Try it again or later",
    });
  }
};
