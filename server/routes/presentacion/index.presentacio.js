import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/presentacion',async (req, res)=>{
    const result = await pool.query('SELECT TABLE presentacion');
    console.log(result);
    res/json('presentacion');
})

export default router;