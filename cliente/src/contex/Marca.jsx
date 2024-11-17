import { createContext, useContext, useState } from 'react';
import { getMarcasRequest,createMarcaRequest,deleteMarcaRequest,getMarcaRequest,updateMarcaRequest } from '../api/marca.js';

export const CategoryMarca = createContext();

export const useMarca = () => {
    const context = useContext(CategoryMarca);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryMarcaProvider");
    }
    return context;
};

export const CategoryMarcaProvider = ({ children }) => {
    const [marca, setMarca] = useState([]);

    async function loadMarca() {
        const response = await getMarcasRequest();
        setMarca(response.data);
    }

    const deleteMarca = async (id) => {
        try {
            const response = await deleteMarcaRequest(id);
            setMarca(marca.filter(marca => marca.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createMarca = async (marca) => {
        try {
            const response = await createMarcaRequest(marca);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getMarca = async (id) => {
        try {
            const response = await getMarcaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateMarca = async (id, newFields) => {
        try {
            const response = await updateMarcaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryMarca.Provider value={{marca,loadMarca,deleteMarca,createMarca,getMarca,updateMarca }}>
            {children}
        </CategoryMarca.Provider>
    );
};