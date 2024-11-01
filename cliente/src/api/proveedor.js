import axios from 'axios'

export const getEntradasRequest = async () => 
    await axios.get('http://localhost:4000/Proveedores');


export const createEntradaRequest =async (proveedor)=>
    await axios.post('http://localhost:4000/Proveedor', proveedor)

export const deleteEntradaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Proveedor/${id}`);

export const getEntradaRequest = async(id) => 
    await axios.get(`http://localhost:4000/Proveedor/${id}`);

export const updateEntradaRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Proveedor/${id}`, newFields);