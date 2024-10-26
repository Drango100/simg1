import axios from 'axios'

export const getCategorysRequest = async () => 
    await axios.get('http://localhost:4000/Categorias');


export const createCategoryRequest =async (categoria)=>
    await axios.post('http://localhost:4000/Categoria', categoria)

export const deleteCategoryRequest = async(id) =>
    await axios.delete(`http://localhost:4000/Categoria/${id}`);

export const getCategoryRequest = async(id) => 
    await axios.get(`http://localhost:4000/Categoria/${id}`);

export const updateCategoryRequest = async (id,newFields)=>
    await axios.put (`http://localhost:4000/Categoria/${id}`, newFields);