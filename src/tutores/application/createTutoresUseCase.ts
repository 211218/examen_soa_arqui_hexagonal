import { Tutores } from "../domain/tutores";
import { TutoresRepository } from "../domain/tutoresRepository";

export class CreateTutoresUseCase {
    constructor(private repository: TutoresRepository) {}

    async execute(id: number, nombre: string): Promise<Tutores> {
        return this.repository.createTutor(id, nombre);
    }
}