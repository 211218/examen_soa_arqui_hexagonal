import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";
import { query } from "../../database/bd";

export class MysqlAlumnosRepository implements AlumnoRepository {
    async createAlumno(id: number, nombre: string, matricula: number): Promise<Alumno> {
        const result = await query('INSERT INTO alumnos (id, nombre, matricula) VALUES (?, ?, ?)', [id, nombre, matricula]);
        return result;
    }

    async getAllAlumnos(): Promise<Alumno[]> {
        const result = await query('SELECT * FROM alumnos');
        return result;
    }

    async addAlumnoToTutor(id: number, tutor: number): Promise<void> {
        await query('UPDATE alumnos SET tutor = ? WHERE id = ?', [tutor, id]);
    }

}