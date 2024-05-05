import express from "express";
import { createTutorController, getAllTutorController, getAlumnoToTutorController } from "./dependencies";

export const tutoresRoutes = express.Router();

tutoresRoutes.post("/create", createTutorController.run.bind(createTutorController));
tutoresRoutes.get("/list_tutores", getAllTutorController.run.bind(getAllTutorController));
tutoresRoutes.get("/list_alumnos", getAlumnoToTutorController.run.bind(getAlumnoToTutorController));