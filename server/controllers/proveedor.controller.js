import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getProveedores = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM proveedor")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.message});
    }
};

export const getProveedor = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM proveedor WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id del proveedor no incontrado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export const createProveedor =async(req, res)=>{
try {
    const {cod_proveedor, 
        id_proveedor,
        empre_proveedor,
        nombre_proveedor,
        ape_proveedor,
        dir_proveedor,
        tel_proveedor,
        correo_proveedor} = req.body;
const [result] = await pool.query(
    "INSERT INTO proveedor(cod_proveedor, id_proveedor,empre_proveedor,nombre_proveedor,ape_proveedor,dir_proveedor,tel_proveedor,correo_proveedor) VALUES (?,?,?,?,?,?,?,?)",
    [cod_proveedor, id_proveedor,empre_proveedor,nombre_proveedor,ape_proveedor,dir_proveedor,tel_proveedor,correo_proveedor]
);
res.json({
    id: result.insertId,
    cod_proveedor, 
    id_proveedor,
    empre_proveedor,
    nombre_proveedor,
    ape_proveedor,
    dir_proveedor,
    tel_proveedor,
    correo_proveedor
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updateProveedor = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE proveedor SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteProveedor =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM proveedor WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export default router;