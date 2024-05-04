import express from "express";
import { createTutorController, getAllTutorController } from "./dependencies";

export const tutoresRoutes = express.Router();

tutoresRoutes.post("/register", createTutorController.run.bind(createTutorController));
tutoresRoutes.get("/all", getAllTutorController.run.bind(getAllTutorController));