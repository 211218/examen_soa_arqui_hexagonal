import { Materia } from "../domain/materias";
import { MateriasRepository } from "../domain/materiasRepository";

export class GetAllMateriaUseCase {
    constructor(private repository: MateriasRepository) {}

    async execute(): Promise<Materia[]> {
        return this.repository.getAllMaterias();
    }
}