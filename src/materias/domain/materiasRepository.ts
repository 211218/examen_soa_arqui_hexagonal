import { Materia } from "./materias";

export interface MateriasRepository {
    createMateria(id_materia: number, nombre: string): Promise<Materia>;
    getAllMaterias(): Promise<Materia[]>;
}