import { Router } from 'express';

import { createTsalida, deleteTsalida, getTsalida, updateTsalida,getTsalidas } from '../../controllers/tp.salida.js';

const router = Router()

router.get('/Tsalidas',getTsalidas);

router.get('/Tsalida/:id',getTsalida);

router.post('/Tsalida',createTsalida);

router.put('/Tsalida/:id',updateTsalida);

router.delete('/Tsalida/:id',deleteTsalida);

export default router;