import { Request, Response } from "express";
import { CreateTutoresUseCase } from "../../application/createTutoresUseCase";
import { Tutores } from "../../domain/tutores";

export class CreateTutorController {
    constructor(private useCase: CreateTutoresUseCase) {}

    async run(req: Request, res: Response) {
        const { id_tutor, nombre } = req.body;
        try {
            const tutor: Tutores = await this.useCase.execute(id_tutor, nombre);
            res.status(201).json(tutor);
        } catch (error: any) {
            if (error instanceof Error) {
                // Si el error es una instancia de Error, manejarlo de manera específica
                res.status(400).json({ message: error.message });
            } else {
                // Si el error no es una instancia de Error, manejarlo de manera genérica
                res.status(500).json({ message: "Error interno del servidor" });
            }
        }
    }
}