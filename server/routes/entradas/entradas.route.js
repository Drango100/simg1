import { Router } from 'express';
import  {getEntradas,getEntrada,createEntrada,updateEntrada,deleteEntrada}  from'../../controllers/entradas.js';

const router = Router()

router.get('/Entradas',getEntradas);

router.get('/Entrada/:id',getEntrada);

router.post('/Entrada',createEntrada);

router.put('/Entrada/:id',updateEntrada);

router.delete('/Entrada/:id',deleteEntrada);

export default router;