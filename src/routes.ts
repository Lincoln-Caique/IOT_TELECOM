import { Router } from 'express';
import { logController } from './useCases/CreateLogUseCase';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/datalogger', (req, res) => {
  return logController.handle(req, res);
});


router.get('/get', async (req, res) => {
  const datas = await prisma.log.findMany()
  res.json(datas)
});



export { router };