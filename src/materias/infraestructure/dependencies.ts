import { MysqlMateriasRepository } from "./MysqlMateriasRespository";
import { CreateMateriaUseCase } from "../application/createMateriaUseCase";
import { CreateMateriaController } from "./controllers/createMateriaController";
import { GetAllMateriaUseCase } from "../application/getAllMateriaUseCase";
import { GetAllMateriaController } from "./controllers/getAllMateriaController";

export const mysqlMateriasRepository = new MysqlMateriasRepository();

export const createMateriaUseCase = new CreateMateriaUseCase(mysqlMateriasRepository);

export const createMateriaController = new CreateMateriaController(createMateriaUseCase);

export const getAllMateriaUseCase = new GetAllMateriaUseCase(mysqlMateriasRepository);

export const getAllMateriaController = new GetAllMateriaController(getAllMateriaUseCase);