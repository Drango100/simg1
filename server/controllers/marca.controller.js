import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getMarcas = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM marca")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.message});
    }
};

export const getMarca = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM marca WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de marca no incontado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export const createMarca =async(req, res)=>{
try {
    const {cod_marca, 
        nombre_marca} = req.body;
const [result] = await pool.query(
    "INSERT INTO marca(cod_marca,nombre_marca) VALUES (?,?)",
    [cod_marca,nombre_marca]
);
res.json({
    id: result.insertId,
        cod_marca, 
        nombre_marca
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updateMarca = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE marca SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteMarca =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM marca WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export default router;