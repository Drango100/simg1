import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getPresentaciones = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM presentacion")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.massage});
    }
};

export const getPresentacion = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM presentacion WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de Presentacion no incontado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export const createPresentacion =async(req, res)=>{
try {
    const {cod_presentacion, 
        nombre_presentacion} = req.body;
const [result] = await pool.query(
    "INSERT INTO presentacion(cod_presentacion,nombre_presentacion) VALUES (?,?)",
    [cod_presentacion,nombre_presentacion]
);
res.json({
    id: result.insertId,
        cod_presentacion, 
        nombre_presentacion
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updatePresentacion = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE presentacion SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deletePresentacion =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM presentacion WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export default router;