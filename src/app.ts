import express from "express";
import cors from "cors";
import "dotenv/config";
import { alumnosRoutes } from "./alumnos/infraestructure/alumnosRoutes";
import { tutoresRoutes } from "./tutores/infraestructure/tutoresRoutes";
import { materiasRoutes } from "./materias/infraestructure/materiasRoutes";
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/alumno', alumnosRoutes);
app.use('/api/v1/tutor', tutoresRoutes);
app.use('/api/v1/materia', materiasRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});