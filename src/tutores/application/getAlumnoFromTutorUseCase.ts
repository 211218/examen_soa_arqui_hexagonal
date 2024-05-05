import { Tutores } from "../domain/tutores";
import { TutoresRepository } from "../domain/tutoresRepository";

// obtener los alumnos de un tutor usando el ID del tutor
export class GetAlumnoFromTutorUseCase {
    constructor(private repository: TutoresRepository) {}

    async execute(id_tutor: number): Promise<Tutores> {
        return this.repository.getAlumnosFromTutor(id_tutor);
    }
}
