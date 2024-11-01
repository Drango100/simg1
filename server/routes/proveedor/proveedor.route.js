import { Router } from 'express';
import  {getProveedores,getProveedor,createProveedor,updateProveedor,deleteProveedor}  from'../../controllers/proveedor.controller.js';

const router = Router()

router.get('/Proveedores',getProveedores);

router.get('/Proveedor/:id',getProveedor);

router.post('/Proveedor',createProveedor);

router.put('/Proveedor/:id',updateProveedor);

router.delete('/Proveedor/:id',deleteProveedor);

export default router;