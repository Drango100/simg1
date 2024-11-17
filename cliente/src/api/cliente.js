import axios from 'axios'

export const getClientesRequest = async () => 
    await axios.get('http://localhost:4000/Clientes');


export const createClienteRequest =async (cliente)=>
    await axios.post('http://localhost:4000/Cliente', cliente)

export const deleteClienteRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Cliente/${id}`);

export const getClienteRequest = async(id) => 
    await axios.get(`http://localhost:4000/Cliente/${id}`);

export const updateClienteRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Cliente/${id}`, newFields);