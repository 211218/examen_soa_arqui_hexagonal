import { Request, Response } from "express";
import { GetAllAlumnoUseCase } from "../../application/getAllAlumnoUseCase";

export class GetAllAlumnoController {
    constructor(private useCase: GetAllAlumnoUseCase) {}

    async run(req: Request, res: Response) {
        const alumnos = await this.useCase.execute();

        res.status(200).json(alumnos);
    }
}