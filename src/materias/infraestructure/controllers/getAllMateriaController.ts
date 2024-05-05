import { Request, Response } from "express";
import { GetAllMateriaUseCase } from "../../application/getAllMateriaUseCase";

export class GetAllMateriaController {
    constructor(private useCase: GetAllMateriaUseCase) {}

    async run(req: Request, res: Response) {
        const materias = await this.useCase.execute();

        res.status(200).json(materias);
    }
}