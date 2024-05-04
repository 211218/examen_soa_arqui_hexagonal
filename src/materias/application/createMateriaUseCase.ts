import { Materia } from "../domain/materias";
import { MateriasRepository } from "../domain/materiasRepository";

export class CreateMateriaUseCase {
    constructor(private repository: MateriasRepository) {}

    async execute(id: number, nombre: string): Promise<Materia> {
        return this.repository.createMateria(id, nombre);
    }
}