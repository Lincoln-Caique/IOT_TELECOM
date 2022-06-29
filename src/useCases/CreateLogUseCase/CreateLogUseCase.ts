import { ILogRepository } from "../../repository/ILogRepository";
import { ILogDTO } from "./CreateLogDTO";


export class CreateLogUseCase {
  constructor(private logRepository: ILogRepository) {
    this.logRepository = logRepository;
  }
  async execute(log: ILogDTO) {
    await this.logRepository.create(log);
  }

}