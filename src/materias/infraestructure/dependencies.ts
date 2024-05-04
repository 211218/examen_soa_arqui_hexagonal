import { MysqlMateriasRepository } from "./MysqlMateriasRespository";
import { CreateMateriaUseCase } from "../application/createMateriaUseCase";
import { CreateMateriaController } from "./controllers/createMateriaController";

export const mysqlMateriasRepository = new MysqlMateriasRepository();

export const createMateriaUseCase = new CreateMateriaUseCase(mysqlMateriasRepository);

export const createMateriaController = new CreateMateriaController(createMateriaUseCase);