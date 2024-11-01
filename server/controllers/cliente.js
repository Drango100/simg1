import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getClientes = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM cliente")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.message});
    }
};

export const getCliente = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM cliente WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de Cliente no incontado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export const createCliente =async(req, res)=>{
try {
    const {cod_cliente,id_cliente,empre_cliente,nombre_cliente,apellido_cliente,dir_cliente,tel_cliente} = req.body;
const [result] = await pool.query(
    "INSERT INTO cliente(cod_cliente,id_cliente,empre_cliente,nombre_cliente,apellido_cliente,dir_cliente,tel_cliente) VALUES (?,?,?,?,?,?,?)",
    [cod_cliente,id_cliente,empre_cliente,nombre_cliente,apellido_cliente,dir_cliente,tel_cliente]
);
res.json({
    id: result.insertId,
    cod_cliente,
    id_cliente,
    empre_cliente,
    nombre_cliente,
    apellido_cliente,
    dir_cliente,
    tel_cliente
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updateCliente = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE cliente SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteCliente =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM cliente WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export default router;