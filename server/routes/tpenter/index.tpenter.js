import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/tipo_entrada',async (req, res)=>{
    const result = await pool.query('SELECT TABLE tipo_entrada');
    console.log(result);
    res/json('tipo_entrada');
})

export default router;