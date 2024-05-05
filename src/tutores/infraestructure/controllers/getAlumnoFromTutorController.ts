import { Request, Response } from "express";
import { GetAlumnoFromTutorUseCase } from "../../application/getAlumnoFromTutorUseCase";

// obtener los alumnos de un tutor usando el ID del tutor
export class GetAlumnoFromTutorController {
    constructor(private useCase: GetAlumnoFromTutorUseCase) {}

    async run(req: Request, res: Response) {
        const { id_tutor } = req.body;

        const result = await this.useCase.execute(id_tutor);

        res.status(200).json(result);

    }
    
}
