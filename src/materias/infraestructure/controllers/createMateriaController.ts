import { Request, Response } from "express";
import { CreateMateriaUseCase } from "../../application/createMateriaUseCase";
import { Materia } from "../../domain/materias";

export class CreateMateriaController {
    constructor(private useCase: CreateMateriaUseCase) {}

    async run(req: Request, res: Response) {
        const id_materia = req.body.id_materia;
        const nombre = req.body.nombre;

        try {
            const materia: Materia = await this.useCase.execute(id_materia, nombre);
            res.status(201).json(materia);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Error interno del servidor" });
            }
        }
    }
}
