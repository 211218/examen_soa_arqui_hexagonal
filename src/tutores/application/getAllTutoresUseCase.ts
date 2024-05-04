import { Tutores } from "../domain/tutores";
import { TutoresRepository } from "../domain/tutoresRepository";

export class GetAllTutoresUseCase { // Clase GetAllTutoresUseCase
    constructor(private repository: TutoresRepository) {} // Constructor de la clase GetAllTutoresUseCase

    async execute(): Promise<Tutores[]> { // Método asíncrono execute que retorna una promesa de un array de Tutores
        return this.repository.getAllTutores(); // Retorna el método getAllTutores del repositorio
    }
}