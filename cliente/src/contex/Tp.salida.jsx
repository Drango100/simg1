import { createContext, useContext, useState } from 'react';
import {getTsalidasRequest,deleteTsalidaRequest, createTsalidaRequest,getTsalidaRequest,updateTsalidaRequest    } from '../api/tp.salidas.js';

export const CategoryTpSalida = createContext();

export const useTpSalida = () => {
    const context = useContext(CategoryTpSalida);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryTpSalidaProvider");
    }
    return context;
};

export const CategoryTpSalidaProvider = ({ children }) => {
    const [tipo_salida, setTpSaldia] = useState([]);

    async function loadTpSalida() {
        const response = await getTsalidasRequest();
        setTpSaldia(response.data);
    }

    const deleteTpSaldia = async (id) => {
        try {
            const response = await deleteTsalidaRequest(id);
            setTpSaldia(tipo_salida.filter(tipo_salida => tipo_salida.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const createTpSaldia = async (tipo_salida) => {
        try {
            const response = await createTsalidaRequest(tipo_salida);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getTpSalida = async (id) => {
        try {
            const response = await getTsalidaRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTpSalida = async (id, newFields) => {
        try {
            const response = await updateTsalidaRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CategoryTpSalida.Provider value={{tipo_salida,loadTpSalida,deleteTpSaldia,createTpSaldia,getTpSalida,updateTpSalida }}>
            {children}
        </CategoryTpSalida.Provider>
    );
};