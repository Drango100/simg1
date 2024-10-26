import axios from 'axios'

export const getMarcasRequest = async () => 
    await axios.get('http://localhost:4000/Marcas');


export const createMarcaRequest =async (marca)=>
    await axios.post('http://localhost:4000/Marca', marca)

export const deleteMarcaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Marca/${id}`);

export const getMarcaRequest = async(id) => 
    await axios.get(`http://localhost:4000/Marca/${id}`);

export const updateMarcaRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Marca/${id}`, newFields);