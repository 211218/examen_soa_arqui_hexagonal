import { Request, Response } from "express";
import { CreateMateriaUseCase } from "../../application/createMateriaUseCase";
import { Materia } from "../../domain/materias";

export class CreateMateriaController {
    constructor(private useCase: CreateMateriaUseCase) {}

    async run(req: Request, res: Response) {
        const id_materia = req.body.id_materia;
        const nombre = req.body.nombre;

        const materia: Materia = await this.useCase.execute(id_materia, nombre);

        res.status(201).json(materia);
    }
}