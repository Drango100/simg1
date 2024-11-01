import axios from 'axios'

export const getTsalidasRequest = async () => 
    await axios.get('http://localhost:4000/Tsalidas');


export const createTsalidaRequest =async (tipo_salida)=>
    await axios.post('http://localhost:4000/Tsalida', tipo_salida)

export const deleteTsalidaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Tsalida/${id}`);

export const getTsalidaRequest = async(id) => 
    await axios.get(`http://localhost:4000/Tsalida/${id}`);

export const updateTsalidaRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Tsalida/${id}`, newFields);