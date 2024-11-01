import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getTsalidas = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM tipo_salida")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.massage});
    }
};

export const getTsalida = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM tipo_salida WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Tipo de salida no incontrado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export const createTsalida =async(req, res)=>{
try {
    const {cod_tipo_salida, 
        descr_tipo_salida} = req.body;
const [result] = await pool.query(
    "INSERT INTO tipo_salida(cod_tipo_salida,descri_tipo_salida) VALUES (?,?)",
    [cod_tipo_salida,descr_tipo_salida]
);
res.json({
    id: result.insertId,
    cod_tipo_salida, 
    descr_tipo_salida
});
} catch (error) {
    return res.status(500).json ({msg: error.massage});
}
};

export const updateTsalida = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE tipo_salida SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteTsalida =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM tipo_salida WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export default router;