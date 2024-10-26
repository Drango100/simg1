import { Router } from 'express';
import  {getCategorys,getCategory,createCategory,updateCategory,deleteCategory}  from'../../controllers/categoria.controller.js';

const router = Router()

router.get('/Categorias',getCategorys);

router.get('/Categoria/:id',getCategory);

router.post('/Categoria',createCategory);

router.put('/Categoria/:id',updateCategory);

router.delete('/Categoria/:id',deleteCategory);

export default router;