import { Request, Response } from "express";
import { GetMateriasFromAlumnoUseCase } from "../../application/getMateriasFromAlumnoUseCase";

export class GetMateriasFromAlumnoController {
    constructor(private useCase: GetMateriasFromAlumnoUseCase) {}

    async run(req: Request, res: Response) {
        const { id_alumno } = req.body;

        const materias = await this.useCase.execute(id_alumno);

        res.status(200).json(materias);
    }
}