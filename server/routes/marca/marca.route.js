import { Router } from 'express';
import  {getMarca,createMarca,updateMarca,deleteMarca,getMarcas}  from'../../controllers/marca.controller.js';

const router = Router()

router.get('/Marcas',getMarcas);

router.get('/Marca/:id',getMarca);

router.post('/Marca',createMarca);

router.put('/Marca/:id',updateMarca);

router.delete('/Marca/:id',deleteMarca);

export default router;