import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class GetAllAlumnoUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(): Promise<Alumno[]> {
        return this.repository.getAllAlumnos();
    }
}