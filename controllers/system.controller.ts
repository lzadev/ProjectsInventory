import { Request, Response } from "express";
import { ApiInventoryDataSource } from "../database/data-source";
import { System } from "../models/System";

const systemRepository = ApiInventoryDataSource.getRepository(System);

export const getAll = async (req: Request, res: Response) => {
  try {
    const systems = await systemRepository.find();
    res.status(200).json({
      total: systems.length,
      data: systems,
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

export const create = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const system = new System();
    system.name = name;

    await systemRepository.save(system);
    res.status(200).json({
      total: 1,
      data: system,
      message: "System created",
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
