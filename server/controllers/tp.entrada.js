import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getTpenters = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM tipo_entrada")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.massage});
    }
};

export const getTpenter = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM tipo_entrada WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Tipo de entrada no incontrado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export const createTpenter =async(req, res)=>{
try {
    const {cod_tipo_entrada, 
        descr_tipo_entrada} = req.body;
const [result] = await pool.query(
    "INSERT INTO tipo_entrada(cod_tipo_entrada,descri_tipo_entrada) VALUES (?,?)",
    [cod_tipo_entrada,descr_tipo_entrada]
);
res.json({
    id: result.insertId,
    cod_tipo_entrada, 
    descr_tipo_entrada
});
} catch (error) {
    return res.status(500).json ({msg: error.massage});
}
};

export const updateTpenter = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE tipo_entrada SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteTpenter =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM tipo_entrada WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export default router;