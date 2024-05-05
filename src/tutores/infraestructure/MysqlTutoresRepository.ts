import { Tutores } from "../domain/tutores";
import { TutoresRepository } from "../domain/tutoresRepository";
import { query } from "../../database/bd";

export class MysqlTutoresRepository implements TutoresRepository {
    async createTutor(id: number, nombre: string): Promise<Tutores> {
        const result = await query('INSERT INTO tutor (id, nombre) VALUES (?, ?)', [id, nombre]);
        return { id, nombre };
    }
    async getAllTutores(): Promise<Tutores[]> {
        const result = await query('SELECT * FROM tutor');
        return result;
    }
    async getAlumnosFromTutor(id: number): Promise<Tutores> {
        const result = await query('SELECT * FROM alumnos WHERE tutor = ?', [id]);
        return result;
    }
}