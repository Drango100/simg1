import { createContext, useContext, useState } from 'react';
import { getCategorysRequest,createCategoryRequest,deleteCategoryRequest,getCategoryRequest,updateCategoryRequest } from '../api/categoria.js';

export const CategoryContex = createContext();

export const useCategory = () => {
    const context = useContext(CategoryContex);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryContextProvider");
    }
    return context;
};

export const CategoryContexProvider = ({ children }) => {
    const [categoria, setCategory] = useState([]);

    async function loadCategory() {
        const response = await getCategorysRequest();
        setCategory(response.data);
    }

    const deleteCategory = async (id) => {
        try {
            const response = await deleteCategoryRequest(id);
            setCategory(categoria.filter(categoria => categoria.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createCategory = async (categoria) => {
        try {
            const response = await createCategoryRequest(categoria);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getCategory = async (id) => {
        try {
            const response = await getCategoryRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateCategory = async (id, newFields) => {
        try {
            const response = await updateCategoryRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryContex.Provider value={{categoria,loadCategory,deleteCategory,createCategory,getCategory,updateCategory }}>
            {children}
        </CategoryContex.Provider>
    );
};