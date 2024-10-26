import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/marca',async (req, res)=>{
    const result = await pool.query('SELECT TABLE marca');
    console.log(result);
    res/json('marca');
})

export default router;