import { Router } from 'express';
import  {getClientes,getCliente,createCliente,updateCliente,deleteCliente}  from'../../controllers/cliente.js';

const router = Router()

router.get('/Clientes',getClientes);

router.get('/Cliente/:id',getCliente);

router.post('/Cliente',createCliente);

router.put('/Cliente/:id',updateCliente);

router.delete('/Cliente/:id',deleteCliente);

export default router;