import {Request,  Response} from 'express';
import { ILogDTO } from "./CreateLogDTO";
import { CreateLogUseCase } from "./CreateLogUseCase";


export class CreateLogController {
  constructor(private logUseCase: CreateLogUseCase) {
    this.logUseCase = logUseCase;
  }

  async handle(req: Request, res: Response) {
    const { temperature, humidity } = req.body;
    try {
      this.logUseCase.execute({temperature: temperature, humidity: humidity} as ILogDTO);
    }catch(error){
      console.error(error);
      return res.status(400).json({
        message: String(error) || 'Unexpected error.'
      })
    }
  }
}