import { Alumno } from "../domain/alumnos";
import { AlumnoRepository } from "../domain/alumnosRepository";

export class CreateAlumnoUseCase {
    constructor(private repository: AlumnoRepository) {}

    async execute(id: number, nombre: string, matricula: number): Promise<Alumno> {
        return this.repository.createAlumno(id, nombre, matricula);
    }
}