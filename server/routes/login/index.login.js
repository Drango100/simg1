import { json, Router } from 'express';
import {pool}from '../../db/db.js'

const router = Router();

router.get('/login_2024',async (req, res)=>{
    const result = await pool.query('SELECT TABLE usuarios');
    console.log(result);
    res/json('usuarios');
})

export default router;