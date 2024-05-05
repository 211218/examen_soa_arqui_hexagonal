import express from "express";
import { createMateriaController, getAllMateriaController } from "./dependencies";

export const materiasRoutes = express.Router();

materiasRoutes.post("/create", createMateriaController.run.bind(createMateriaController));
materiasRoutes.get("/list_materias", getAllMateriaController.run.bind(getAllMateriaController));