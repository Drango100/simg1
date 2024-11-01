import axios from 'axios'

export const getUmedidasRequest = async () => 
    await axios.get('http://localhost:4000/Umedidas');


export const createUmedidaRequest =async (unida_medida)=>
    await axios.post('http://localhost:4000/Umedida', unida_medida)

export const deleteUmedidaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Umedida/${id}`);

export const getUmedidaRequest = async(id) => 
    await axios.get(`http://localhost:4000/Umedida/${id}`);

export const updateUmedidaRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Umedida/${id}`, newFields);