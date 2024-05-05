import { Tutores } from "./tutores";

export interface TutoresRepository {
    createTutor(id_tutor: number, nombre: string): Promise<Tutores>;
    getAllTutores(): Promise<Tutores[]>;
    getAlumnosFromTutor(id_tutor: number): Promise<Tutores>;
}