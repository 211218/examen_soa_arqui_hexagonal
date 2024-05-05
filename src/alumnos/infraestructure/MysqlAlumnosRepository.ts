import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";
import { query } from "../../database/bd";

export class MysqlAlumnosRepository implements AlumnoRepository {
    async createAlumno(id_alumno: number, nombre: string, matricula: number): Promise<Alumno> {
        const result = await query('INSERT INTO alumnos (id_alumno, nombre, matricula) VALUES (?, ?, ?)', [id_alumno, nombre, matricula]);
        return result;
    }

    async getAllAlumnos(): Promise<Alumno[]> {
        const result = await query('SELECT * FROM alumnos');
        return result;
    }

    async addAlumnoToTutor(id_alumno: number, id_tutor: number): Promise<void> {
        await query('UPDATE alumnos SET id_tutor = ? WHERE id_alumno = ?', [id_tutor, id_alumno]);
    }

    async addAlumnoToMateria(id_alumno: number, id_materia: number): Promise<void> {
        // Verifica si ya existe la relación alumno-materia
        const existeRelacion = await query('SELECT * FROM alumnos_materias WHERE id_alumno = ? AND id_materia = ?', [id_alumno, id_materia]);
    
        if (existeRelacion.length === 0) {
            // Inserta el nuevo registro en la tabla alumnos_materias
            await query('INSERT INTO alumnos_materias (id_alumno, id_materia) VALUES (?, ?)', [id_alumno, id_materia]);
        }
    }

    async getMateriasFromAlumno(id_alumno: number): Promise<any[]> {
        const materias = await query(`
            SELECT m.nombre AS nombre
            FROM alumnos_materias am
            JOIN materias m ON am.id_materia = m.id_materia
            WHERE am.id_alumno = ?
        `, [id_alumno]);
    
        return materias;
    }
    
    

}