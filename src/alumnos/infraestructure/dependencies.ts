import { MysqlAlumnosRepository } from "./MysqlAlumnosRepository";
import { CreateAlumnoUseCase } from "../application/createAlumnoUseCase";
import { CreateAlumnoController } from "./controllers/createAlumnoController";

import { GetAllAlumnoUseCase } from "../application/getAllAlumnoUseCase";
import { GetAllAlumnoController } from "./controllers/getAllAlumnoController";

import { AddAlumnoToTutorUseCase } from "../application/addAlumnoToTutorUseCase";
import { AddAlumnoToTutorController } from "./controllers/addAlumnoToTutorController";

export const mysqlAlumnosRepository = new MysqlAlumnosRepository();

export const createAlumnoUseCase = new CreateAlumnoUseCase(mysqlAlumnosRepository);
export const createAlumnoController = new CreateAlumnoController(createAlumnoUseCase);

export const getAllAlumnoUseCase = new GetAllAlumnoUseCase(mysqlAlumnosRepository);
export const getAllAlumnoController = new GetAllAlumnoController(getAllAlumnoUseCase);

export const addAlumnoToTutorUseCase = new AddAlumnoToTutorUseCase(mysqlAlumnosRepository);
export const addAlumnoToTutorController = new AddAlumnoToTutorController(addAlumnoToTutorUseCase);