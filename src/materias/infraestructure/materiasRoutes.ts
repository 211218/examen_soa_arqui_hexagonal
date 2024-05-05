import express from "express";
import { createMateriaController, getAllMateriaController } from "./dependencies";

export const materiasRoutes = express.Router();

materiasRoutes.post("/register", createMateriaController.run.bind(createMateriaController));
materiasRoutes.get("/all", getAllMateriaController.run.bind(getAllMateriaController));