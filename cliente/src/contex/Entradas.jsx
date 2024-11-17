import { createContext, useContext, useState } from 'react';
import { getEntradasRequest,deleteEntradaRequest,createEntradaRequest,getEntradaRequest,updateEntradaRequest } from '../api/entrada.js';

export const CategoryEntrada = createContext();

export const useEntrada = () => {
    const context = useContext(CategoryEntrada);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryEntradaProvider");
    }
    return context;
};

export const CategoryEntradaProvider = ({ children }) => {
    const [entrada, setEntrada] = useState([]);

    async function loadEntrada() {
        const response = await getEntradasRequest();
        setEntrada(response.data);
    }

    const deleteEntrada = async (id) => {
        try {
            const response = await deleteEntradaRequest(id);
            setEntrada(entrada.filter(entrada => entrada.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createEntrada = async (entrada) => {
        try {
            const response = await createEntradaRequest(entrada);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getEntrada = async (id) => {
        try {
            const response = await getEntradaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateEntrada = async (id, newFields) => {
        try {
            const response = await updateEntradaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <CategoryEntrada.Provider value={{ entrada,loadEntrada,deleteEntrada,createEntrada,getEntrada,updateEntrada }}>
            {children}
        </CategoryEntrada.Provider>
    );
};