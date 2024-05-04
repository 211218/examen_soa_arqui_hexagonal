import { Materia } from "./materias";

export interface MateriasRepository {
    createMateria(id: number, nombre: string): Promise<Materia>;
}