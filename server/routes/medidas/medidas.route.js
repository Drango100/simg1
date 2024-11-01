import { Router } from 'express';

import { getUmedidas, getUmedida, createUmedida, updateUmedida,deleteUmedida } from '../../controllers/unidad.medida.js';

const router = Router()

router.get('/Umedidas',getUmedidas);

router.get('/Umedida/:id',getUmedida);

router.post('/Umedida',createUmedida);

router.put('/Umedida/:id',updateUmedida);

router.delete('/Umedida/:id',deleteUmedida);

export default router;