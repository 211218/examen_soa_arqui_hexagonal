import express from "express";
import { createAlumnoController, getAllAlumnoController, addAlumnoToTutorController, addAlumnoToMateriaController, getMateriasFromAlumnoController } from "./dependencies";

export const alumnosRoutes = express.Router();

alumnosRoutes.post("/create", createAlumnoController.run.bind(createAlumnoController));
alumnosRoutes.get("/list_alumnos", getAllAlumnoController.run.bind(getAllAlumnoController));
alumnosRoutes.post("/tutor", addAlumnoToTutorController.run.bind(addAlumnoToTutorController));
alumnosRoutes.post("/materia", addAlumnoToMateriaController.run.bind(addAlumnoToMateriaController));
alumnosRoutes.get("/materiasAlumno", getMateriasFromAlumnoController.run.bind(getMateriasFromAlumnoController));