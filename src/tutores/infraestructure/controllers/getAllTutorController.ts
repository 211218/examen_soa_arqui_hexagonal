import { Request, Response } from "express";
import { GetAllTutoresUseCase } from "../../application/getAllTutoresUseCase";

export class GetAllTutorController {
    constructor(private useCase: GetAllTutoresUseCase) {}

    async run(req: Request, res: Response) {
        const tutores = await this.useCase.execute();

        res.status(200).json(tutores);
    }
}