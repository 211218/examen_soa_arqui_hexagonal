import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class GetMateriasFromAlumnoUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(id_alumno: number): Promise<Alumno[]> {
        return this.repository.getMateriasFromAlumno(id_alumno);
    }
}