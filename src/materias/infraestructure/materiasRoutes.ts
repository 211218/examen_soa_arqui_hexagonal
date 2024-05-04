import express from "express";
import { createMateriaController } from "./dependencies";

export const materiasRoutes = express.Router();

materiasRoutes.post("/register", createMateriaController.run.bind(createMateriaController));