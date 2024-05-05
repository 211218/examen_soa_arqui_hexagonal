import { MysqlTutoresRepository } from "./MysqlTutoresRepository";
import { CreateTutoresUseCase } from "../application/createTutoresUseCase";
import { CreateTutorController } from "./controllers/createTutorController";

import { GetAllTutoresUseCase } from "../application/getAllTutoresUseCase";
import { GetAllTutorController } from "./controllers/getAllTutorController";

import { GetAlumnoFromTutorUseCase } from "../application/getAlumnoFromTutorUseCase";
import { GetAlumnoFromTutorController } from "./controllers/getAlumnoFromTutorController"; 

export const mysqlTutoresRepository = new MysqlTutoresRepository();

export const createTutorUseCase = new CreateTutoresUseCase(mysqlTutoresRepository);
export const createTutorController = new CreateTutorController(createTutorUseCase);

export const getAllTutorUseCase = new GetAllTutoresUseCase(mysqlTutoresRepository);
export const getAllTutorController = new GetAllTutorController(getAllTutorUseCase);

export const getAlumnoToTutorUseCase = new GetAlumnoFromTutorUseCase(mysqlTutoresRepository);
export const getAlumnoToTutorController = new GetAlumnoFromTutorController(getAlumnoToTutorUseCase);