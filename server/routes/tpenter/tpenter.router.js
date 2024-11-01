import { Router } from 'express';
import  {getTpenters,getTpenter,createTpenter,updateTpenter,deleteTpenter}  from'../../controllers/tp.entrada.js';

const router = Router()

router.get('/Tpenters',getTpenters);

router.get('/Tpenter/:id',getTpenter);

router.post('/Tpenter',createTpenter);

router.put('/Tpenter/:id',updateTpenter);

router.delete('/Tpenter/:id',deleteTpenter);

export default router;