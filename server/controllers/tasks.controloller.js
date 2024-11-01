import express from 'express';
import { pool } from '../db/db.js';

const router =express.Router();

export const getTasks = async(req, res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM producto ORDER BY createdAt ASC")
        res.json(result);
    }catch (error){
        return res.status(500).json ({msg: error.message});
    }
};

export const getTask = async (req, res)=>{
    try {
        const [result]= await pool.query("SELECT * FROM producto WHERE id = ?",[req.params.id,
        ]);
        if (result.length == 0){
            return res.status(404).json({msg:"Id de producto no incontado"})
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export const createTasks =async(req, res)=>{
try {
    const {nombre_producto, 
        can_maxima,
        can_minima,
        valor_producto, 
        iva_producto, 
        descu_producto, 
        ubi_producto} = req.body;
const [result] = await pool.query(
    "INSERT INTO producto(nombre_producto,can_maxima,can_minima,valor_producto, iva_producto, descu_producto, ubi_producto) VALUES (?,?,?,?,?,?,?)",
    [nombre_producto,can_maxima,can_minima,valor_producto,iva_producto,descu_producto,ubi_producto]
);
res.json({
    id: result.insertId,
    nombre_producto, 
        can_maxima,
        can_minima,
        valor_producto, 
        iva_producto, 
        descu_producto, 
        ubi_producto,
});
} catch (error) {
    return res.status(500).json ({msg: error.message});
}
};

export const updateTasks = async(req, res)=>{
    try {
        const [result] =await pool.query("UPDATE producto SET ? WHERE id =?",[req.body,
            req.params.id,
            ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }

};

export const deleteTasks =async(req, res)=>{
    try {
        const [result] = await pool.query("DELETE FROM producto WHERE id = ?",[req.params.id,]);
    if (result.affectedRows === 0)
        return res.status(404).json ({msg:"id no encontrado o ya elimanado"})
    res.json(result)
    } catch (error) {
        return res.status(500).json ({msg: error.message});
    }
};

export default router