import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getEntradas = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM entrada")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.massage});
    }
};

export const getEntrada = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM entrada WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de entrada no incontado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export const createEntrada =async(req, res)=>{
try {
    const {cod_entrada, 
        fech_entrada,orden_compra,hora_entrada,factura} = req.body;
const [result] = await pool.query(
    "INSERT INTO entrada(cod_entrada,fech_entrada,orden_compra,hora_entrada,factura) VALUES (?,?,?,?,?)",
    [cod_entrada,fech_entrada,orden_compra,hora_entrada,factura]
);
res.json({
    id: result.insertId,
    cod_entrada,
    fech_entrada,
    orden_compra,
    hora_entrada,
    factura
});
} catch (error) {
    return res.status(500).json ({msg: error.massage});
}
};

export const updateEntrada = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE entrada SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }

};

export const deleteEntrada =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM entrada WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.massage});
    }
};

export default router;