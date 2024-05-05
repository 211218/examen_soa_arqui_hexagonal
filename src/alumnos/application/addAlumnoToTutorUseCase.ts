import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class AddAlumnoToTutorUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(id_alumno: number, id_tutor: number): Promise<void> {
        return this.repository.addAlumnoToTutor(id_alumno, id_tutor);
    }
}