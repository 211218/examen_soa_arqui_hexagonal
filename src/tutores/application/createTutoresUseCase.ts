import { Tutores } from "../domain/tutores";
import { TutoresRepository } from "../domain/tutoresRepository";

export class CreateTutoresUseCase {
    constructor(private repository: TutoresRepository) {}

    async execute(id_tutor: number, nombre: string): Promise<Tutores> {
        return this.repository.createTutor(id_tutor, nombre);
    }
}