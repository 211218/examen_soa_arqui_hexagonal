import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class AddAlumnoToMateriaUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(id: number, materias: number): Promise<void> {
        return this.repository.addAlumnoToMateria(id, materias);
    }
}