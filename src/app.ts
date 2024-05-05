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


app.use('/api/v1/alumnos', alumnosRoutes);
app.use('/api/v1/tutores', tutoresRoutes);
app.use('/api/v1/materias', materiasRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});