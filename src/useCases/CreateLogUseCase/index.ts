import { PrismaLogRepository } from "../../repository/impl/PrismaLogRepository";
import { CreateLogController } from "./CreateLogController";
import { PrismaClient } from "@prisma/client";
import { CreateLogUseCase } from "./CreateLogUseCase";

const repository = new PrismaLogRepository(new PrismaClient());
const logUseCase = new CreateLogUseCase(repository);
const logController = new CreateLogController(logUseCase);

export {logController};

