import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getSalidas = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM salida")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.message});
    }
};

export const getSalida = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM salida WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de Salida no incontrado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export const createSalida =async(req, res)=>{
try {
    const {cod_salida,fech_salida,factura_salida,hora_salida,guia_trasporte,empre_trasporte} = req.body;
const [result] = await pool.query(
    "INSERT INTO salida(cod_salida,fech_salida,factura_salida,hora_salida,guia_trasporte,empre_trasporte) VALUES (?,?,?,?,?,?)",
    [cod_salida,fech_salida,factura_salida,hora_salida,guia_trasporte,empre_trasporte]
);
res.json({
    id: result.insertId,
    cod_salida,
    fech_salida,
    factura_salida,
    hora_salida,
    guia_trasporte,
    empre_trasporte
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updateSalida = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE salida SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteSalida =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM salida WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export default router;