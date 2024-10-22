import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/producto',async (req, res)=>{
    const result = await pool.query('SELECT TABLE producto');
    console.log(result);
    res/json('productos');
})

export default router;