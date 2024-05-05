import { Request, Response } from 'express';
import { AddAlumnoToMateriaUseCase } from '../../application/addAlumnoToMateriaUseCase';
import { Alumno } from '../../domain/alumnos';

export class AddAlumnoToMateriaController {
    constructor(private useCase: AddAlumnoToMateriaUseCase) {}

    async run(req: Request, res: Response) {
        const { id, materias} = req.body;

        await this.useCase.execute(id, materias);

        res.status(201).json();

    }

}