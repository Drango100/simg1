import axios from 'axios'

export const getProveedoresRequest = async () => 
    await axios.get('http://localhost:4000/Proveedores');


export const createProveedorRequest =async (proveedor)=>
    await axios.post('http://localhost:4000/Proveedor', proveedor)

export const deleteProveedorRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Proveedor/${id}`);

export const getProveedorRequest = async(id) => 
    await axios.get(`http://localhost:4000/Proveedor/${id}`);

export const updateProveedorRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Proveedor/${id}`, newFields);