import { PrismaClient, Log } from '@prisma/client';
import {ILogDTO} from '../../useCases/CreateLogUseCase/CreateLogDTO'
import { ILogRepository } from '../ILogRepository';


export class PrismaLogRepository implements ILogRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async index(): Promise<Log[]> {
    return this.prisma.log.findMany();
  }

  async show(id:string): Promise<Log | null> {
    return await this.prisma.log.findUnique({
      where: {
        id: id
      }
    })
  }

  async create(data: ILogDTO): Promise<Log> {
    return await this.prisma.log.create({
      data: {
        datalogger: data.datalogger
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.log.delete({
      where: {
        id:id
      }
    })
  }

}