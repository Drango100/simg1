import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getCategorys = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM categoria")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.message});
    }
};

export const getCategory = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM categoria WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de producto no incontado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export const createCategory =async(req, res)=>{
try {
    const {cod_categoria, 
        nombre_categoria} = req.body;
const [result] = await pool.query(
    "INSERT INTO categoria(cod_categoria,nombre_categoria) VALUES (?,?)",
    [cod_categoria,nombre_categoria]
);
res.json({
    id: result.insertId,
        cod_categoria, 
        nombre_categoria
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updateCategory = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE categoria SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteCategory =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM categoria WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export default router;