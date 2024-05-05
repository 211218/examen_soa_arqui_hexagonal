import { Alumno } from './alumnos';

// Interfaz para el repositorio de Alumnos
export interface AlumnoRepository {
    //crear un alumno con ID, nombre y matricula
    createAlumno(id_alumno: number, nombre: string, matricula: number): Promise<Alumno>;
    //obtener todos los alumnos
    getAllAlumnos(): Promise<Alumno[]>;
    //agregar un alumno a un tutor, usando el ID del alumno y el ID del tutor
    addAlumnoToTutor(id_alumno: number, id_tutor: number): Promise<void>;
    //agregar una materia a un alumno, usando el ID del alumno y el ID de la materia
    addAlumnoToMateria(id_alumno: number, id_materia: number): Promise<void>;
    //obtener las materias de un alumno, usando el ID del alumno
    getMateriasFromAlumno(id_alumno: number): Promise<any[]>;

}
