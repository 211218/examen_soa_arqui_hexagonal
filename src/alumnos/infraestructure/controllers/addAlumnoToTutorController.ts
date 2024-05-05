import { Request, Response } from "express";
import { AddAlumnoToTutorUseCase } from "../../application/addAlumnoToTutorUseCase";
import { Alumno } from "../../domain/alumnos";

export class AddAlumnoToTutorController {
    constructor(private useCase: AddAlumnoToTutorUseCase) {}

    async run(req: Request, res: Response) {
        const { id_alumno, id_tutor } = req.body;

        try {
            await this.useCase.execute(id_alumno, id_tutor);
            res.status(201).json({ message: 'Asignación exitosa de alumno a tutor.' });
        } catch (error) {
            // Manejo de errores si ocurre algún problema durante la asignación
            res.status(500).json({ message: 'Error al asignar alumno a tutor.' });
        }
    }

}
