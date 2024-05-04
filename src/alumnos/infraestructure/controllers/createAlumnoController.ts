import { Request, Response } from "express";
import { CreateAlumnoUseCase } from "../../application/createAlumnoUseCase";
import { Alumno } from "../../domain/alumnos";

export class CreateAlumnoController {
    constructor(private useCase: CreateAlumnoUseCase) {}

    async run(req: Request, res: Response) {
        const { id, nombre, matricula } = req.body;
        try {
            const alumno: Alumno = await this.useCase.execute(id, nombre, matricula);
            res.status(201).json(alumno);
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
