import { Router } from 'express';
import  {getPresentaciones,getPresentacion,createPresentacion,updatePresentacion,deletePresentacion}  from'../../controllers/presentacion.controller.js'

const router = Router()

router.get('/Presentaciones',getPresentaciones);

router.get('/Presentacion/:id',getPresentacion);

router.post('/Presentacion',createPresentacion);

router.put('/Presentacion/:id',updatePresentacion);

router.delete('/Presentacion/:id',deletePresentacion);

export default router;