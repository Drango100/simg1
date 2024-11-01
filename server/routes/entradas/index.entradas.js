import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/entrada',async (req, res)=>{
    const result = await pool.query('SELECT TABLE entrada');
    console.log(result);
    res/json('entrada');
})

export default router;