import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/salida',async (req, res)=>{
    const result = await pool.query('SELECT TABLE salida');
    console.log(result);
    res/json('salida');
})

export default router;