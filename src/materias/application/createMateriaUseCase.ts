import { Materia } from "../domain/materias";
import { MateriasRepository } from "../domain/materiasRepository";

export class CreateMateriaUseCase {
    constructor(private repository: MateriasRepository) {}

    async execute(id_materia: number, nombre: string): Promise<Materia> {
        return this.repository.createMateria(id_materia, nombre);
    }
}