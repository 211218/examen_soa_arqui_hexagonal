import { Alumno } from './alumnos';

// Interfaz para el repositorio de Alumnos
export interface AlumnoRepository {
    //crear un alumno con ID, nombre y matricula
    createAlumno(id: number, nombre: string, matricula: number): Promise<Alumno>;
    //obtener todos los alumnos
    getAllAlumnos(): Promise<Alumno[]>;
    //agregar un alumno a un tutor, usando el ID del alumno y el ID del tutor
    addAlumnoToTutor(id: number, tutor: number): Promise<void>;

}
