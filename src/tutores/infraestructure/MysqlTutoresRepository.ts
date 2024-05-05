import { Tutores } from "../domain/tutores";
import { TutoresRepository } from "../domain/tutoresRepository";
import { query } from "../../database/bd";

export class MysqlTutoresRepository implements TutoresRepository {
    async createTutor(id_tutor: number, nombre: string): Promise<Tutores> {
        const result = await query('INSERT INTO tutores (id_tutor, nombre) VALUES (?, ?)', [id_tutor, nombre]);
        return { id_tutor, nombre };
    }
    async getAllTutores(): Promise<Tutores[]> {
        const result = await query('SELECT * FROM tutores');
        return result;
    }
    async getAlumnosFromTutor(id_tutor: number): Promise<Tutores> {
        const result = await query('SELECT * FROM alumnos WHERE id_tutor = ?', [id_tutor]);
        return result;
    }
}