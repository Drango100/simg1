import axios from 'axios'

export const getSalidasRequest = async () => 
    await axios.get('http://localhost:4000/Salidas');


export const createSalidaRequest =async (salida)=>
    await axios.post('http://localhost:4000/Salida', salida)

export const deleteSalidaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Salida/${id}`);

export const getSalidaRequest = async(id) => 
    await axios.get(`http://localhost:4000/Salida/${id}`);

export const updateSalidaRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Salida/${id}`, newFields);