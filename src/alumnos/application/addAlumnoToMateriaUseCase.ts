import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class AddAlumnoToMateriaUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(id_alumno: number, id_materia: number): Promise<void> {
        return this.repository.addAlumnoToMateria(id_alumno, id_materia);
    }
}