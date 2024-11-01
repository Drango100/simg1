import axios from 'axios'

export const getClientesRequest = async () => 
    await axios.get('http://localhost:4000/Clientes');


export const createClineteRequest =async (cliente)=>
    await axios.post('http://localhost:4000/Clinete', cliente)

export const deleteClineteRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Clinete/${id}`);

export const getClineteRequest = async(id) => 
    await axios.get(`http://localhost:4000/Clinete/${id}`);

export const updateClineteRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Clinete/${id}`, newFields);