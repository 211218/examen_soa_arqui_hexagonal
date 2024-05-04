import { Tutores } from "./tutores";

export interface TutoresRepository {
    createTutor(id: number, nombre: string): Promise<Tutores>;
    getAllTutores(): Promise<Tutores[]>;
}