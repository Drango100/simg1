import { Router } from 'express';
import  {getPresentaciones,getPresentacion,createPresentacion,updatePresentacion,deletePresentacion}  from'../../controllers/presentacion.controller.js'

const router = Router()

router.get('/Presentaciones',getPresentaciones);

router.get('/Presentacion/:id',getPresentacion);

router.post('/Marca',createPresentacion);

router.put('/Marca/:id',updatePresentacion);

router.delete('/Marca/:id',deletePresentacion);

export default router;