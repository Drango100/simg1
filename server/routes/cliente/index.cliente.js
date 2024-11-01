import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/cliente',async (req, res)=>{
    const result = await pool.query('SELECT TABLE cliente');
    console.log(result);
    res/json('cliente');
})

export default router;