import { createContext, useContext, useState } from 'react';
import { getTpEntradasRequest, createTpenterRequest,deleteTpenterRequest, getTpenterRequest, updateTpenterRequest  } from '../api/tp.entrada.js';

export const CategoryTpEntrada = createContext();

export const useTpEntrada = () => {
    const context = useContext(CategoryTpEntrada);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryTpEntradaProvider");
    }
    return context;
};

export const CategoryTpEntradaProvider = ({ children }) => {
    const [tipo_entrada, setTpEntrada] = useState([]);

    async function loadTpEntrada() {
        const response = await getTpEntradasRequest();
        setTpEntrada(response.data);
    }

    const deleteTpEntrada = async (id) => {
        try {
            const response = await deleteTpenterRequest(id);
            setTpEntrada(tipo_entrada.filter(tipo_entrada => tipo_entrada.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createTpEntrada = async (tipo_entrada) => {
        try {
            const response = await createTpenterRequest(tipo_entrada);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getTpEntrada = async (id) => {
        try {
            const response = await getTpenterRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTpEntrada = async (id, newFields) => {
        try {
            const response = await updateTpenterRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryTpEntrada.Provider value={{tipo_entrada,loadTpEntrada,deleteTpEntrada,createTpEntrada,getTpEntrada,updateTpEntrada }}>
            {children}
        </CategoryTpEntrada.Provider>
    );
};