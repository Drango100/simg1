import { Router } from 'express';
import  {getTasks, getTask, createTasks, updateTasks, deleteTasks}  from'../../controllers/tasks.controloller.js';

const router = Router()

router.get('/Productos',getTasks);

router.get('/Producto/:id',getTask);

router.post('/Producto',createTasks );

router.put('/Producto/:id',updateTasks);

router.delete('/Producto/:id',deleteTasks);

export default router