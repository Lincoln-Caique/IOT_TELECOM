import { Log } from '@prisma/client'
import { ILogDTO } from '../useCases/CreateLogUseCase/CreateLogDTO'

interface ILogRepository {
  index(): Promise<Log[]>

  show(id: string): Promise<Log | null>

  create(data: ILogDTO): Promise<Log>

  delete(id: string): Promise<void>
}

export {ILogRepository};