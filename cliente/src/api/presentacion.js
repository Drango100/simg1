import axios from 'axios'

export const getViwesRequest = async () => 
    await axios.get('http://localhost:4000/Presentaciones');


export const createViweRequest =async (presentacion)=>
    await axios.post('http://localhost:4000/Presentacion', presentacion)

export const deleteViweRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Presentacion/${id}`);

export const getViweRequest = async(id) => 
    await axios.get(`http://localhost:4000/Presentacion/${id}`);

export const updateViweRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Presentacion/${id}`, newFields);