import { Materia } from "../domain/materias";
import { MateriasRepository } from "../domain/materiasRepository";
import { query } from "../../database/bd";

export class MysqlMateriasRepository implements MateriasRepository {
    async createMateria(id_materia: number, nombre: string): Promise<Materia> {
        const result = await query('INSERT INTO materias (id_materia, nombre) VALUES (?, ?)', [id_materia, nombre]);
        return { id_materia, nombre };
    }
    async getAllMaterias(): Promise<Materia[]> {
        const result = await query('SELECT * FROM materias');
        return result;
    }
}