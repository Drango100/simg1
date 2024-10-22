import axios from 'axios'

export const getProductRequest = async () => 
    await axios.get('http://localhost:4000/Productos');


export const createProductRequest =async (producto)=>
    await axios.post('http://localhost:4000/Producto', producto)

export const deleteTaskRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Producto/${id}`);

export const getProductsRequest = async(id) => 
    await axios.get(`http://localhost:4000/Producto/${id}`);

export const updateProductRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Producto/${id}`, newFields);