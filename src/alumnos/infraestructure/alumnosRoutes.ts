import express from "express";
import { createAlumnoController, getAllAlumnoController, addAlumnoToTutorController } from "./dependencies";

export const alumnosRoutes = express.Router();

alumnosRoutes.post("/register", createAlumnoController.run.bind(createAlumnoController));
alumnosRoutes.get("/all", getAllAlumnoController.run.bind(getAllAlumnoController));
alumnosRoutes.post("/tutores", addAlumnoToTutorController.run.bind(addAlumnoToTutorController));