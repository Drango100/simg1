import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/tipo_salida',async (req, res)=>{
    const result = await pool.query('SELECT TABLE tipo_salida');
    console.log(result);
    res/json('tipo_salida');
})

export default router;