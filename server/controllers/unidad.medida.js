import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getUmedidas = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM unida_medida")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.massage});
    }
};

export const getUmedida = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM unida_medida WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Tipo de salida no incontrado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export const createUmedida =async(req, res)=>{
try {
    const {cod_unidad_medida,descri_medida} = req.body;
const [result] = await pool.query(
    "INSERT INTO unida_medida(cod_unidad_medida,descri_medida) VALUES (?,?)",
    [cod_unidad_medida,descri_medida]
);
res.json({
    id: result.insertId,
    cod_unidad_medida,
    descri_medida
});
} catch (error) {
    return res.status(500).json ({msg: error.massage});
}
};

export const updateUmedida = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE unida_medida SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteUmedida =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM unida_medida WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export default router;