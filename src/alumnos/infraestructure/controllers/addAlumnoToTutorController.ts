import { Request, Response } from "express";
import { AddAlumnoToTutorUseCase } from "../../application/addAlumnoToTutorUseCase";
import { Alumno } from "../../domain/alumnos";

export class AddAlumnoToTutorController {
    constructor(private useCase: AddAlumnoToTutorUseCase) {}

    async run(req: Request, res: Response) {
        const { id, tutor} = req.body;

        await this.useCase.execute(id, tutor);

        res.status(201).json();

    }

}