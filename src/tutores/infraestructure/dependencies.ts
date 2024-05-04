import { MysqlTutoresRepository } from "./MysqlTutoresRepository";
import { CreateTutoresUseCase } from "../application/createTutoresUseCase";
import { CreateTutorController } from "./controllers/createTutorController";

import { GetAllTutoresUseCase } from "../application/getAllTutoresUseCase";
import { GetAllTutorController } from "./controllers/getAllTutorController";

export const mysqlTutoresRepository = new MysqlTutoresRepository();

export const createTutorUseCase = new CreateTutoresUseCase(mysqlTutoresRepository);
export const createTutorController = new CreateTutorController(createTutorUseCase);

export const getAllTutorUseCase = new GetAllTutoresUseCase(mysqlTutoresRepository);
export const getAllTutorController = new GetAllTutorController(getAllTutorUseCase);