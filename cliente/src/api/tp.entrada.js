import axios from 'axios'

export const getTpEntradasRequest = async () => 
    await axios.get('http://localhost:4000/Tpenters');


export const createTpenterRequest =async (tipo_entrada)=>
    await axios.post('http://localhost:4000/Tpenter', tipo_entrada)

export const deleteTpenterRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Tpenter/${id}`);

export const getTpenterRequest = async(id) => 
    await axios.get(`http://localhost:4000/Tpenter/${id}`);

export const updateTpenterRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Tpenter/${id}`, newFields);