import axios from 'axios'

export const getEntradasRequest = async () => 
    await axios.get('http://localhost:4000/Entradas');


export const createEntradaRequest =async (entrada)=>
    await axios.post('http://localhost:4000/Entrada', entrada)

export const deleteEntradaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Entrada/${id}`);

export const getEntradaRequest = async(id) => 
    await axios.get(`http://localhost:4000/Entrada/${id}`);

export const updateEntradaRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Entrada/${id}`, newFields);