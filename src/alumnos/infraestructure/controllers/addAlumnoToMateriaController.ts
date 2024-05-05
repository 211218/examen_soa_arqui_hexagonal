import { Request, Response } from 'express';
import { AddAlumnoToMateriaUseCase } from '../../application/addAlumnoToMateriaUseCase';
import { Alumno } from '../../domain/alumnos';

export class AddAlumnoToMateriaController {
    constructor(private useCase: AddAlumnoToMateriaUseCase) {}

    async run(req: Request, res: Response) {
        const { id_alumno, id_materia} = req.body;

        await this.useCase.execute(id_alumno, id_materia);

        res.status(201).json();

    }

}