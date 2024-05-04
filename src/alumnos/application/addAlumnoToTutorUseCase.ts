import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class AddAlumnoToTutorUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(id: number, tutor: number): Promise<void> {
        return this.repository.addAlumnoToTutor(id, tutor);
    }
}