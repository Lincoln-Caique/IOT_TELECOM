import {Router} from 'express';
import { logController } from './useCases/CreateLogUseCase';

const router = Router();

// router.post('/datalogger', (req,res) => {
//   return logController.handle(req,res);
// })

router.get('/', (req,res) => {
  return res.status(200).json({
    'message': 'Hello My Friend !'
  });
});

export {router};