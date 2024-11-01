import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/unidad_medida',async (req, res)=>{
    const result = await pool.query('SELECT TABLE unidad_medida');
    console.log(result);
    res/json('unidad_medida');
})

export default router;