import { MysqlAlumnosRepository } from "./MysqlAlumnosRepository";
import { CreateAlumnoUseCase } from "../application/createAlumnoUseCase";
import { CreateAlumnoController } from "./controllers/createAlumnoController";

import { GetAllAlumnoUseCase } from "../application/getAllAlumnoUseCase";
import { GetAllAlumnoController } from "./controllers/getAllAlumnoController";

import { AddAlumnoToTutorUseCase } from "../application/addAlumnoToTutorUseCase";
import { AddAlumnoToTutorController } from "./controllers/addAlumnoToTutorController";

import { AddAlumnoToMateriaUseCase } from "../application/addAlumnoToMateriaUseCase";
import { AddAlumnoToMateriaController } from "./controllers/addAlumnoToMateriaController";

import { GetMateriasFromAlumnoUseCase } from "../application/getMateriasFromAlumnoUseCase";
import { GetMateriasFromAlumnoController } from "./controllers/getMateriasFromAlumnoController";

export const mysqlAlumnosRepository = new MysqlAlumnosRepository();

export const createAlumnoUseCase = new CreateAlumnoUseCase(mysqlAlumnosRepository);
export const createAlumnoController = new CreateAlumnoController(createAlumnoUseCase);

export const getAllAlumnoUseCase = new GetAllAlumnoUseCase(mysqlAlumnosRepository);
export const getAllAlumnoController = new GetAllAlumnoController(getAllAlumnoUseCase);

export const addAlumnoToTutorUseCase = new AddAlumnoToTutorUseCase(mysqlAlumnosRepository);
export const addAlumnoToTutorController = new AddAlumnoToTutorController(addAlumnoToTutorUseCase);

export const addAlumnoToMateriaUseCase = new AddAlumnoToMateriaUseCase(mysqlAlumnosRepository);
export const addAlumnoToMateriaController = new AddAlumnoToMateriaController(addAlumnoToMateriaUseCase);

export const getMateriasFromAlumnoUseCase = new GetMateriasFromAlumnoUseCase(mysqlAlumnosRepository);
export const getMateriasFromAlumnoController = new GetMateriasFromAlumnoController(getMateriasFromAlumnoUseCase);