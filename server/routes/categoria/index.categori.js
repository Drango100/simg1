import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/categoria',async (req, res)=>{
    const result = await pool.query('SELECT TABLE categoria');
    console.log(result);
    res/json('categoria');
})

export default router;