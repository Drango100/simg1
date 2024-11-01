import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/proveedor',async (req, res)=>{
    const result = await pool.query('SELECT TABLE proveedor');
    console.log(result);
    res/json('proveedor');
})

export default router;