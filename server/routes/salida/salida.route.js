import { Router } from 'express';
import { createSalida, deleteSalida, getSalida, getSalidas, updateSalida } from '../../controllers/salida.js';

const router = Router()

router.get('/Salidas',getSalidas);

router.get('/Salida/:id',getSalida);

router.post('/Salida',createSalida);

router.put('/Salida/:id',updateSalida);

router.delete('/Salida/:id',deleteSalida);

export default router;