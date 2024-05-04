import { Materia } from "../domain/materias";
import { MateriasRepository } from "../domain/materiasRepository";
import { query } from "../../database/bd";

export class MysqlMateriasRepository implements MateriasRepository {
    async createMateria(id: number, nombre: string): Promise<Materia> {
        const result = await query('INSERT INTO materias (id, nombre) VALUES (?, ?)', [id, nombre]);
        return { id, nombre };
    }
}